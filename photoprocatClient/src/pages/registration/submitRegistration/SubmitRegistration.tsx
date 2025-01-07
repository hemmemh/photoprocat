import { onRegistration } from '../../../entities/registration/model/RegistrationActions';
import Button from '../../../shared/UI/button/Button';
import { useAppDispatch } from '../../../shared/hooks/reduxHooks';

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
