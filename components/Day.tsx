import React, { useState, useRef } from 'react';
import style from '../styles/git.module.scss';

type DayProps = {
  date: string;
  count: number;
  sources: { [source: string]: number };
};

const Day: React.FC<DayProps> = ({ date, count, sources }) => {
  const [hovered, setHovered] = useState(false);
  const [popoverPos, setPopoverPos] = useState({ top: 0, left: 0 });
  const dayRef = useRef<HTMLDivElement>(null);

  const getColor = (count: number) => {
    if (count === 0) return '#2b2c3d';
    if (count === 1) return '#6b57a1';
    if (count === 2) return '#936cc9';
    if (count === 3) return '#ab83e3';
    if (count === 4) return '#bb9af7';
    if (count === 5) return '#a07ce0';
    if (count === 6) return '#8566c2';
    return '#6a4ca3';
  };

  const tooltipContent = Object.entries(sources)
    .map(([source, value]) => `${source}: ${value}`)
    .join('\n');

  const fullContent = `${date}: ${count} contributions\n${tooltipContent}`;

  const handleMouseEnter = () => {
    if (dayRef.current) {
      const rect = dayRef.current.getBoundingClientRect();
      setPopoverPos({
        left: rect.left + rect.width / 2,
        top: rect.top,
      });
    }
    setHovered(true);
  };

  const handleMouseLeave = () => setHovered(false);

  return (
    <>
      <div
        className={style.dayWrapper}
        ref={dayRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={style.day}
          style={{ backgroundColor: getColor(count) }}
        />
      </div>

      {hovered && (
        <div
          className={style.popover}
          style={{
            left: popoverPos.left,
            top: popoverPos.top - 8,
          }}
        >
          {fullContent}
        </div>
      )}
    </>
  );
};

export default Day;
