import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { navbarSlice } from '../../store2/reducers/NavBarSlice';
import { Modal } from '../../components/UI/modal/Modal';
import { ChangePass } from './changePass/ChangePass';
import { Login } from './login/Login';
import { SetEmail } from './setEmail/SetEmail';
import './loginNavBar.scss';
import { memo } from 'react';
import { selectLoginModal, selectValidationError, selectValidationErrorText } from '../../store2/selectors/navBarSelectors';

export const LoginNavBar = memo(() => {
  const loginModal = useAppSelector(selectLoginModal);
  const validationError = useAppSelector(selectValidationError);
  const validationErrorText = useAppSelector(selectValidationErrorText);
  
  const { setLoginModal } = navbarSlice.actions;

  const dispatch = useAppDispatch();

  return (
    <Modal
      modalClass="login"
      active={loginModal}
      setActive={(e: boolean) => dispatch(setLoginModal(e))}
    >
      <Login />
      <SetEmail />
      <ChangePass />
      {validationError && (
        <div className="error">
          {`Ошибка в написании ${validationErrorText.join(', ')}`}
        </div>
      )}
    </Modal>
  );
});
