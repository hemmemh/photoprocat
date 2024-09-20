import { memo } from 'react';
import './shedule.scss';

export const Shedule = () => {
  return (
    <div className="shedule">
      <a className="sheduleTel" href="tel:+74951703918">
        +7 495 170-39-18
      </a>
      <div className="sheduleText">Круглосуточно</div>
    </div>
  );
};

export default memo(Shedule);
