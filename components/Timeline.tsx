import { Children, PropsWithChildren, ReactNode } from 'react';
import timeline from '../styles/timeline.module.scss';

type TimeLineProps = { children: ReactNode };

const Timeline = ({ children }: TimeLineProps) => {
  const arrayChildren = Children.toArray(children);

  return (
    <section className={timeline.designSection}>
      <div className={timeline.timeline}>
        {Children.map(arrayChildren, (child) => (
          <>
            <div className={timeline.timelineMiddle}>
              <div className={timeline.timelineCircle}></div>
            </div>
            <div className={timeline.timelineContent}>{child}</div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
