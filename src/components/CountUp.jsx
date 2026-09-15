import { useEffect, useRef, useState } from "react";

/**
 * Lightweight count-up animation, no external dependency.
 * Drop-in replacement for react-countup's <CountUp end={n} duration={s} />.
 *
 * Usage: <CountUp end={15} duration={2} />
 */
export default function CountUp({ end, duration = 2, decimals = 0 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let frame;
    const start = performance.now();
    const from = 0;

    function tick(now) {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const current = from + (end - from) * progress;
      setValue(current);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);

  return <span ref={ref}>{value.toFixed(decimals)}</span>;
}
