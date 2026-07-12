import { useEffect, useRef } from "react";

function createRandom(seed) {
  let value = seed >>> 0;

  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function StrandField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const compact = window.matchMedia("(max-width: 650px)").matches;
    const random = createRandom(41983);
    const filamentCount = compact ? 9 : window.innerWidth < 1000 ? 16 : 24;
    const pulseCount = compact ? 7 : 15;
    const filaments = Array.from({ length: filamentCount }, (_, index) => ({
      y: -0.08 + random() * 1.16,
      slope: random() * 0.92 - 0.46,
      amplitude: 0.012 + random() * 0.05,
      frequency: 1.35 + random() * 2.8,
      phase: random() * Math.PI * 2,
      speed: 0.08 + random() * 0.18,
      depth: 0.24 + random() * 0.76,
      width: index % 8 === 0 ? 1.35 : 0.45 + random() * 0.72,
      opacity: index % 8 === 0 ? 0.72 : 0.13 + random() * 0.32,
      red: index % 4 !== 1,
    }));
    const pulses = Array.from({ length: pulseCount }, (_, index) => ({
      filament: Math.floor(random() * filamentCount),
      offset: random(),
      speed: 0.025 + random() * 0.055,
      radius: index % 5 === 0 ? 2.2 : 0.75 + random() * 1.2,
    }));
    const orbitNodes = Array.from({ length: compact ? 5 : 10 }, () => ({
      angle: random() * Math.PI * 2,
      speed: 0.025 + random() * 0.045,
      radius: 0.7 + random() * 1.3,
      red: random() > 0.34,
    }));

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let startTime = performance.now();
    let scrollTarget = window.scrollY;
    let scrollPosition = scrollTarget;
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const filamentPoint = (filament, progress, elapsed) => {
      const oscillation = Math.sin(
        progress * Math.PI * filament.frequency + filament.phase + elapsed * filament.speed,
      );
      const crossing = filament.slope * (progress - 0.5);
      return {
        x:
          width * (0.34 + progress * 0.78) +
          Math.sin(progress * 5.3 + filament.phase) * width * 0.012 +
          pointer.x * filament.depth * 22,
        y:
          height * (filament.y + crossing + oscillation * filament.amplitude) +
          pointer.y * filament.depth * 16 -
          scrollPosition * 0.012 * filament.depth,
      };
    };

    const drawGrid = () => {
      const spacing = compact ? 72 : 64;
      const startX = width * (compact ? 0.08 : 0.42);
      context.save();
      context.lineWidth = 0.5;
      context.strokeStyle = "rgba(247, 245, 240, 0.07)";
      context.setLineDash([1, 7]);
      for (let x = startX; x < width + spacing; x += spacing) {
        context.beginPath();
        context.moveTo(x + pointer.x * 4, 0);
        context.lineTo(x + pointer.x * 4, height);
        context.stroke();
      }
      for (let y = -spacing; y < height + spacing; y += spacing) {
        context.beginPath();
        context.moveTo(startX, y + pointer.y * 3 - (scrollPosition * 0.02) % spacing);
        context.lineTo(width, y + pointer.y * 3 - (scrollPosition * 0.02) % spacing);
        context.stroke();
      }
      context.restore();
    };

    const drawOrbit = (elapsed) => {
      const centerX = width * (compact ? 0.69 : 0.76) + pointer.x * 16;
      const centerY = height * (compact ? 0.72 : 0.47) + pointer.y * 12;
      const radiusX = Math.min(width * 0.25, height * 0.34);
      const radiusY = radiusX * 0.46;

      context.save();
      context.translate(centerX, centerY);
      context.rotate(-0.34 + pointer.x * 0.06);
      for (let ring = 0; ring < 3; ring += 1) {
        context.save();
        context.scale(1, 0.46 + ring * 0.1);
        context.beginPath();
        context.arc(0, 0, radiusX * (0.72 + ring * 0.16), 0, Math.PI * 2);
        context.strokeStyle = ring === 1 ? "rgba(255, 48, 73, 0.22)" : "rgba(247, 245, 240, 0.11)";
        context.lineWidth = ring === 1 ? 0.9 : 0.55;
        context.setLineDash(ring === 2 ? [3, 10] : []);
        context.stroke();
        context.restore();
      }
      context.restore();

      orbitNodes.forEach((node) => {
        const angle = node.angle + elapsed * node.speed;
        const x = centerX + Math.cos(angle) * radiusX;
        const y = centerY + Math.sin(angle) * radiusY;
        context.beginPath();
        context.arc(x, y, node.radius, 0, Math.PI * 2);
        context.fillStyle = node.red ? "rgba(255, 48, 73, 0.78)" : "rgba(247, 245, 240, 0.72)";
        context.shadowColor = node.red ? "rgba(255, 48, 73, 0.8)" : "rgba(255, 255, 255, 0.5)";
        context.shadowBlur = node.red ? 10 : 5;
        context.fill();
      });
      context.shadowBlur = 0;
    };

    const draw = (now) => {
      const elapsed = (now - startTime) / 1000;
      pointer.x += (pointer.targetX - pointer.x) * 0.04;
      pointer.y += (pointer.targetY - pointer.y) * 0.04;
      scrollPosition += (scrollTarget - scrollPosition) * 0.055;

      context.clearRect(0, 0, width, height);
      drawGrid();
      context.globalCompositeOperation = "screen";

      filaments.forEach((filament) => {
        context.beginPath();
        for (let step = 0; step <= 72; step += 1) {
          const point = filamentPoint(filament, step / 72, elapsed);
          if (step === 0) context.moveTo(point.x, point.y);
          else context.lineTo(point.x, point.y);
        }
        context.strokeStyle = filament.red
          ? `rgba(255, 48, 73, ${filament.opacity})`
          : `rgba(247, 245, 240, ${filament.opacity * 0.78})`;
        context.shadowColor = filament.red ? "rgba(255, 36, 65, 0.64)" : "rgba(255, 255, 255, 0.32)";
        context.shadowBlur = filament.red ? 7 : 3;
        context.lineWidth = filament.width;
        context.stroke();
      });

      context.shadowBlur = 0;
      pulses.forEach((pulse) => {
        const progress = (pulse.offset + elapsed * pulse.speed) % 1;
        const filament = filaments[pulse.filament];
        const point = filamentPoint(filament, progress, elapsed);
        context.beginPath();
        context.arc(point.x, point.y, pulse.radius, 0, Math.PI * 2);
        context.fillStyle = filament.red ? "rgba(255, 82, 103, 0.94)" : "rgba(255, 255, 255, 0.86)";
        context.shadowColor = filament.red ? "rgba(255, 39, 69, 1)" : "rgba(255, 255, 255, 0.82)";
        context.shadowBlur = pulse.radius > 2 ? 18 : 9;
        context.fill();
      });

      context.shadowBlur = 0;
      drawOrbit(elapsed);

      const scanX = width * (0.43 + ((elapsed * 0.035) % 1) * 0.55);
      const scanGradient = context.createLinearGradient(scanX - 18, 0, scanX + 18, 0);
      scanGradient.addColorStop(0, "rgba(255, 48, 73, 0)");
      scanGradient.addColorStop(0.5, "rgba(255, 48, 73, 0.16)");
      scanGradient.addColorStop(1, "rgba(255, 48, 73, 0)");
      context.fillStyle = scanGradient;
      context.fillRect(scanX - 18, 0, 36, height);
      context.globalCompositeOperation = "source-over";

      if (!reducedMotion) animationFrame = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event) => {
      pointer.targetX = event.clientX / window.innerWidth - 0.5;
      pointer.targetY = event.clientY / window.innerHeight - 0.5;
    };
    const handleScroll = () => {
      scrollTarget = window.scrollY;
    };
    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reducedMotion) draw(performance.now());
    });

    resizeObserver.observe(canvas);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    resize();
    startTime = performance.now();
    draw(startTime);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="strand-field" aria-hidden="true" />;
}

export default StrandField;
