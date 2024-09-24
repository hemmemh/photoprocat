import { onSave } from '../../../../store2/actions/UserActions';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import Button2 from '../../../UI/button2/Button2';
import Loader from '../../../UI/loader/Loader';
import { selectLoadData, selectToggle } from '../../../../store2/selectors/userSelectors';

const Submit = () => {
  const toggle = useAppSelector(selectToggle);
  const loadData = useAppSelector(selectLoadData);
  
  const dispatch = useAppDispatch();

  return (
    <div className="User__submit">
      <Button2
        onClick={() => dispatch(onSave())}
        className="buttonCart _submit"
      >
        {loadData ? (
          <Loader className="basketLoader" />
        ) : toggle === 0 ? (
          'Сохранить'
        ) : (
          'Главная'
        )}
      </Button2>
    </div>
  );
};

export default Submit;
