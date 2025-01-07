import { memo } from 'react';
import DirectionSort from './directionSort/DirectionSort';
import OptionsSort from './optionsSort/OptionsSort';
import './sortProducts.scss';

export const SortProducts = memo(() => {
  return (
    <div className="mainCatalog__sort sort-main-catalog">
      <OptionsSort />
      <DirectionSort />
    </div>
  );
});
