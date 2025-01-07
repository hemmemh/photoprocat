import './leftCompare.scss';
import { removeByType } from '../../../entities/compareItem/model/CompareActions';
import { useAppDispatch } from '../../../shared/hooks/reduxHooks';

const LeftCompare = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="top-left">
      <div
        onClick={() => dispatch(removeByType())}
        className="clear _icon-delete"
      >
        Очистить
      </div>
      <div className="item">Модель Фотоаппарата</div>
    </div>
  );
};

export default LeftCompare;
