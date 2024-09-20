import LeftCompare from './leftCompare/LeftCompare';
import TopSlider from './topSlider/TopSlider';
import './topCompare.scss';
import Swiper from 'swiper';

const TopCompare = ({
  setFirstSwiper,
  secondSwiper,
}: {
  setFirstSwiper: (value: Swiper) => void;
  secondSwiper: Swiper | null;
}) => {
  return (
    <div className="top">
      <LeftCompare />
      <TopSlider setFirstSwiper={setFirstSwiper} secondSwiper={secondSwiper} />
    </div>
  );
};

export default TopCompare;
