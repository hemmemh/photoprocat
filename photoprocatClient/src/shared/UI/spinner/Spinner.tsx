import { memo } from 'react';
import './spinner.scss';

const Spinner = () => {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default memo(Spinner);
