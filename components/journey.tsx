import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Plane } from 'lucide-react';
import style from '../styles/journey.module.scss';

const JourneyPath = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const pathRef = useRef(null);
  const [carPos, setCarPos] = useState({ x: 0, y: 0 });

  // More wavy path from bottom-left to top-right
  const pathD = `
    M 50 180
    Q 80 140, 120 160
    Q 160 200, 200 140
    Q 240 80, 280 150
    Q 320 200, 350 50
  `;

  useEffect(() => {
    if (!inView || !pathRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();

    let start = null;
    const duration = 3000; // animation duration in ms

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const point = path.getPointAtLength(progress * length);
      setCarPos({ x: point.x, y: point.y });
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView]);

  return (
    <div className={style.journeyContainer} ref={ref}>
      <svg viewBox="0 0 400 200" className={style.journeySvg}>
        {/* Base dashed path */}
        <path className={style.pathBase} d={pathD} />

        {/* Animated travel line */}
        <motion.path
          className={style.pathAnimated}
          d={pathD}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
          ref={pathRef}
        />

        {/* Car icon */}
        <motion.g transform={`translate(${carPos.x - 12}, ${carPos.y - 12})`}>
          <Plane size={32} color="#7aa2f7" fill="#7aa2f7" />
        </motion.g>
      </svg>
    </div>
  );
};

export default JourneyPath;
