import React from 'react';
import BodyRegistration from '../bodyRegistration/BodyRegistration';
import SubmitRegistration from '../submitRegistration/SubmitRegistration';
import Navigation from '../../../shared/UI/navigation/Navigation';
import Loader from '../../../shared/UI/loader/Loader';
import './registration.scss';
import { useAppSelector } from '../../../shared/hooks/reduxHooks';
import { selectLoader } from '../../../entities/navBar/model/navBarSelectors';
import { selectSuccessfullReg } from '../../../entities/registration/model/registrationSelectors';

const Mainregistration = () => {
  const loader = useAppSelector(selectLoader);
  const successfullReg = useAppSelector(selectSuccessfullReg);
  return (
    <main className="Registration">
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
    </main>
  );
};

export default Mainregistration;
