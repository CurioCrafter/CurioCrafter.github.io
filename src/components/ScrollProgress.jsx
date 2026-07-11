import { useEffect, useRef } from "react";

function ScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    let animationFrame = 0;

    const update = () => {
      const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollRange > 0 ? Math.min(window.scrollY / scrollRange, 1) : 0;
      progressRef.current?.style.setProperty("transform", `scaleX(${progress})`);
      animationFrame = 0;
    };

    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span ref={progressRef} />
    </div>
  );
}

export default ScrollProgress;
