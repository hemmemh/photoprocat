import { useState } from 'react';
import { useAppSelector } from '../../../hooks/reduxHooks';
import useUpdatePassword from '../../../hooks/useUpdatePassword';
import Input from '../../../components/UI/input/Input';
import Button from '../../../components/UI/button/Button';
import './changePass.scss';
import { selectModalStage } from '../../../store2/selectors/navBarSelectors';

export const ChangePass = () => {
  const mail = '';
  const [code, setcode] = useState<string>('');
  const [password, setpassword] = useState<string>('');
  const modalStage = useAppSelector(selectModalStage);
  const { updatePassword2 } = useUpdatePassword({
    email: mail,
    password,
    code,
  });

  return (
    <div
      className={
        modalStage === 2 ? 'newPasswordModal active' : 'newPasswordModal'
      }
    >
      <div className="newPasswordModal__title">Введите код и новый пароль</div>
      <div className="newPasswordModal__inputs">
        <Input
          value={code}
          change={setcode}
          inputClass="registration"
          placeholder="код"
        />
        <Input
          value={password}
          change={setpassword}
          inputClass="registration"
          placeholder="пароль"
        />
      </div>
      <div className="newPasswordModal__button">
        <Button onClick={updatePassword2} className="login-modal g">
          изменить пароль
        </Button>
      </div>
    </div>
  );
};
