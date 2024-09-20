import BodyUser from './bodyuser/BodyUser';
import Navigation from '../UI/navigation/Navigation';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import './user.scss';
import { userSlice } from '../../store2/reducers/UserSlice';

const MainUser = () => {
  const { setToggle } = userSlice.actions;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setToggle(0));
  }, []);

  return (
    <div className="User">
      <div className="User__container">
        <Navigation navigationClass="user">Главная / Личный кабинет</Navigation>
        <div className="User__title">
          <span>Личный</span> Кабинет
        </div>
        <BodyUser />
      </div>
    </div>
  );
};

export default MainUser;
