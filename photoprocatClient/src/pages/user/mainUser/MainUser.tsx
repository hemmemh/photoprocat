import BodyUser from '../bodyuser/BodyUser';
import Navigation from '../../../shared/UI/navigation/Navigation';
import { useEffect } from 'react';
import './user.scss';
import { userSlice } from '../../../entities/user/model/UserSlice';
import { useAppDispatch } from '../../../shared/hooks/reduxHooks';

const MainUser = () => {
  const { setToggle } = userSlice.actions;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setToggle(0));
  }, []);

  return (
    <main className="User">
      <div className="User__container">
        <Navigation navigationClass="user">Главная / Личный кабинет</Navigation>
        <h1 className="User__title">
          <span>Личный</span> Кабинет
        </h1>
        <BodyUser />
      </div>
    </main>
  );
};

export default MainUser;
