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
    const random = createRandom(41983);
    const filamentCount = window.innerWidth < 720 ? 12 : 22;
    const particleCount = window.innerWidth < 720 ? 18 : 34;
    const filaments = Array.from({ length: filamentCount }, (_, index) => ({
      start: random() * 1.2 - 0.1,
      slope: random() * 1.35 - 0.68,
      amplitude: 0.018 + random() * 0.055,
      frequency: 1.1 + random() * 2.1,
      phase: random() * Math.PI * 2,
      speed: 0.035 + random() * 0.085,
      depth: 0.2 + random() * 0.8,
      width: index % 7 === 0 ? 1.15 : 0.55 + random() * 0.5,
      opacity: index % 7 === 0 ? 0.72 : 0.22 + random() * 0.28,
      isRed: index % 3 !== 0,
    }));
    const particles = Array.from({ length: particleCount }, () => ({
      x: 0.42 + random() * 0.65,
      y: random(),
      radius: 0.35 + random() * 1.1,
      phase: random() * Math.PI * 2,
      speed: 0.04 + random() * 0.08,
      isRed: random() > 0.42,
    }));

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let startTime = performance.now();
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

    const draw = (now) => {
      const elapsed = (now - startTime) / 1000;
      pointer.x += (pointer.targetX - pointer.x) * 0.035;
      pointer.y += (pointer.targetY - pointer.y) * 0.035;

      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "screen";

      filaments.forEach((filament) => {
        context.beginPath();

        for (let step = 0; step <= 84; step += 1) {
          const progress = step / 84;
          const oscillation = Math.sin(
            progress * Math.PI * filament.frequency + filament.phase + elapsed * filament.speed,
          );
          const crossing = filament.slope * (progress - 0.5);
          const x =
            width * (0.34 + progress * 0.83) +
            Math.sin(progress * 5.2 + filament.phase) * width * 0.012 +
            pointer.x * filament.depth * 18;
          const y =
            height * (filament.start + crossing + oscillation * filament.amplitude) +
            pointer.y * filament.depth * 13;

          if (step === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        }

        const red = filament.isRed;
        context.strokeStyle = red
          ? `rgba(255, 47, 66, ${filament.opacity})`
          : `rgba(247, 245, 240, ${filament.opacity * 0.82})`;
        context.shadowColor = red ? "rgba(255, 35, 55, 0.7)" : "rgba(255, 255, 255, 0.4)";
        context.shadowBlur = red ? 7 : 4;
        context.lineWidth = filament.width;
        context.stroke();
      });

      context.shadowBlur = 0;
      particles.forEach((particle) => {
        const drift = Math.sin(elapsed * particle.speed + particle.phase);
        const x = width * particle.x + pointer.x * 8 + drift * 5;
        const y = height * particle.y + pointer.y * 6 + drift * 3;
        context.beginPath();
        context.arc(x, y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = particle.isRed
          ? "rgba(255, 55, 72, 0.52)"
          : "rgba(247, 245, 240, 0.46)";
        context.fill();
      });

      context.globalCompositeOperation = "source-over";

      if (!reducedMotion) animationFrame = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event) => {
      pointer.targetX = event.clientX / window.innerWidth - 0.5;
      pointer.targetY = event.clientY / window.innerHeight - 0.5;
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reducedMotion) draw(performance.now());
    });

    resizeObserver.observe(canvas);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    resize();
    startTime = performance.now();
    draw(startTime);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="strand-field" aria-hidden="true" />;
}

export default StrandField;
