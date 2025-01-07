import { onSave } from '../../../entities/user/model/UserActions';
import Button2 from '../../../shared/UI/button2/Button2';
import Loader from '../../../shared/UI/loader/Loader';
import { selectLoadData, selectToggle } from '../../../entities/user/model/userSelectors';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/reduxHooks';

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
