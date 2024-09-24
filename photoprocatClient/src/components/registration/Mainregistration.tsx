import React from 'react';
import BodyRegistration from './bodyRegistration/BodyRegistration';
import SubmitRegistration from './submitRegistration/SubmitRegistration';
import Navigation from '../UI/navigation/Navigation';
import Loader from '../UI/loader/Loader';
import { useAppSelector } from '../../hooks/reduxHooks';
import './registration.scss';
import { selectLoader } from '../../store2/selectors/navBarSelectors';
import { selectSuccessfullReg } from '../../store2/selectors/registrationSelectors';

const Mainregistration = () => {
  const loader = useAppSelector(selectLoader);
  const successfullReg = useAppSelector(selectSuccessfullReg);
  return (
    <div className="Registration">
      <div className="Registration__container">
        <Navigation navigationClass="registration">
          Главная / Регистрация
        </Navigation>
        <div className="Registration__title">Регистрация</div>
        <BodyRegistration />
        <SubmitRegistration />
      </div>
      {loader && (
        <div className="Registration__loader">
          <Loader />
        </div>
      )}
      {successfullReg && (
        <div className="Registration__successfullReg">Успешная регистрация</div>
      )}
    </div>
  );
};

export default Mainregistration;
