import { memo } from 'react';
import DirectionSort from './directionSort/DirectionSort';
import OptionsSort from './optionsSort/OptionsSort';
import './sortCatalog.scss';

export const SortCatalog = memo(() => {
  return (
    <div className="mainCatalog__sort sort-main-catalog">
      <OptionsSort />
      <DirectionSort />
    </div>
  );
});
