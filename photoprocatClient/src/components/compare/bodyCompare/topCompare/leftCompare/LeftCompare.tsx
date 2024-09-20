import './leftCompare.scss';
import { useAppDispatch } from '../../../../../hooks/reduxHooks';
import { removeByType } from '../../../../../store2/actions/CompareActions';

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
