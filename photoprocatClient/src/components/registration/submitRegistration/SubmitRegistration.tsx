import Button from '../../UI/button/Button';
import { onRegistration } from '../../../store2/actions/RegistrationActions';
import { useAppDispatch } from '../../../hooks/reduxHooks';

const SubmitRegistration = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="submit">
      <Button
        onClick={() => dispatch(onRegistration())}
        className="registration g"
      >
        Зарегистрироваться
      </Button>
    </div>
  );
};

export default SubmitRegistration;
