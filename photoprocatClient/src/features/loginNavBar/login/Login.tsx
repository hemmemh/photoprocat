import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { navbarSlice } from '../../../store2/reducers/NavBarSlice';
import useValidation from '../../../hooks/useValidation';
import Input from '../../../components/UI/input/Input';
import Button from '../../../components/UI/button/Button';
import './loginModal.scss';

export const Login = () => {
  const [mail, setmail] = useState<string>('');
  const [password, setpassword] = useState<string>('');

  const { loginModal, modalStage } = useAppSelector(
    (state) => state.reducer.navbar
  );
  const { setModalStage } = navbarSlice.actions;
  const dispatch = useAppDispatch();
  const {
    validationEmail,
    validationPassword,
    changePassword,
    onSetMail,
    onLogin,
    onRegistration,
  } = useValidation({ setmail, setpassword, mail, password });
  useEffect(() => {
    if (loginModal === false) {
      dispatch(setModalStage(0));
      setmail('');
      setpassword('');
    } else {
      setmail('');
      setpassword('');
    }
  }, [loginModal]);

  return (
    <div
      className={
        modalStage === 0 ? 'login-modal__body active' : 'login-modal__body'
      }
    >
      <div className="login-modal__title">Войдите в свой аккаунт</div>
      <div className="login-modal__google"></div>
      <div className="login-modal__inputs">
        <Input
          value={mail}
          change={onSetMail}
          inputClass={
            validationEmail ? 'registration tr' : 'registration tr act'
          }
          placeholder="Логин"
        />
        <Input
          value={password}
          change={changePassword}
          inputClass={
            validationPassword ? 'registration tr' : 'registration tr act'
          }
          placeholder="Пароль"
        />
      </div>

      <div
        onClick={() => dispatch(setModalStage(1))}
        className="login-modal__pass"
      >
        Вспомнить пароль?
      </div>

      <div className="login-modal__buttons">
        <Button onClick={onLogin} className="login-modal g">
          Войти
        </Button>
        <Button onClick={onRegistration} className="reg-modal g">
          Регистрация
        </Button>
      </div>
    </div>
  );
};
