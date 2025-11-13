import React from 'react';
import style from '../styles/git.module.scss';

type DayProps = {
  date: string;
  count: number;
  sources: { [source: string]: number };
};

const Day: React.FC<DayProps> = ({ date, count, sources }) => {
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

  return (
    <div className={style.dayWrapper}>
      <div
        className={style.day}
        style={{ backgroundColor: getColor(count) }}
        title={`${date}: ${count} contributions\n${tooltipContent}`}
      />
    </div>
  );
};

export default Day;
