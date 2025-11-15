import { useEffect, useState } from 'react';
import Day from './Day';
import style from '../styles/git.module.scss';

type ByDate = {
  [date: string]: { [source: string]: number };
};

type BySourceTotal = {
  [source: string]: { commits: number; issues: number; merge_requests: number };
};

type ContributionsResponse = {
  by_date: ByDate;
  by_source_total: BySourceTotal;
};

type SumUpDay = {
  date: string;
  count: number;
  sources: { [source: string]: number };
};

const colors = [
  '#2b2c3d', // 0
  '#6b57a1', // 1
  '#936cc9', // 2
  '#ab83e3', // 3
  '#bb9af7', // 4
  '#a07ce0', // 5
  '#8566c2', // 6+
];

const GitHeatMap = () => {
  const [data, setData] = useState<ContributionsResponse | null>(null);

  useEffect(() => {
    fetch('https://git-contrib.mathis-burger.de/api/activity', {
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((json: ContributionsResponse) => setData(json))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!data) return null;

  const year = new Date().getFullYear();
  const firstDay = new Date();
  firstDay.setFullYear(year - 1);
  const lastDay = new Date();

  const days: SumUpDay[] = [];
  for (let d = new Date(firstDay); d <= lastDay; d.setDate(d.getDate() + 1)) {
    const iso = d.toISOString().slice(0, 10);
    const sources = data.by_date[iso] || {};
    const total = Object.values(sources).reduce((a, b) => a + b, 0);
    days.push({ date: iso, count: total, sources });
  }

  const total_criteria = ['commits', 'issues', 'merge_requests'] as const;

  const getTotal = (criterion: keyof BySourceTotal[string]) =>
    Object.values(data.by_source_total).reduce(
      (acc, curr) => acc + curr[criterion],
      0,
    );

  return (
    <div className={style.overallContainer}>
      <div className={style.box}>
        {total_criteria.map((criterion) => (
          <div key={criterion} className={style.elementBox}>
            <p>{criterion.replaceAll('_', ' ')}</p>
            <h2>{getTotal(criterion)}</h2>

            <ul>
              {Object.entries(data.by_source_total).map(([source, values]) => (
                <li key={source}>
                  {source}: {values[criterion]}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={style.clBox}>
        <div className={style.chartOuter}>
          <div className={style.chartScroll}>
            <div className={style.chart}>
              {days.map((day) => (
                <Day
                  key={day.date}
                  date={day.date}
                  count={day.count}
                  sources={day.sources}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={style.legend}>
          {colors.map((color, idx) => (
            <div key={idx} className={style.legendItem}>
              <div
                className={style.legendColor}
                style={{ backgroundColor: color }}
              />
              <span>{idx === 6 ? '6+' : idx}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHeatMap;
