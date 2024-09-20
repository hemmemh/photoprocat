import React, { FC } from 'react';
import './amount.scss';

interface button {
  value: number;
  change: (value: number) => void;
  classAmount?: string;
  max?: number;
  min?: number;
}
const Amount: FC<button> = ({
  value = 0,
  change,
  classAmount = 'origin',
  max = 1000,
  min = 1,
}) => {
  const onPlus = (a: number) => {
    const res = Math.min(max, a + 1);
    change(res);
  };

  const onMinus = (a: number) => {
    const res = Math.max(min, a - 1);
    change(res);
  };

  return (
    <div className={`Amount ${classAmount}`}>
      <div onClick={() => onPlus(value)} className="Amount__change _plus"></div>
      <div className="Amount__number">{value}</div>
      <div
        onClick={() => onMinus(value)}
        className="Amount__change _minus"
      ></div>
    </div>
  );
};

export default Amount;
