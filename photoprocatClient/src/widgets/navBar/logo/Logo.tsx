import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../../../app/config/routs';
import { memo } from 'react';
import './logo.scss';
import useCheckMobileScreen from '../../../shared/hooks/DetectMobileHook';

export const Logo = () => {
  const navigate = useNavigate();
  const isMobile = useCheckMobileScreen(767.98);

  return (
    <div className="logoNavbar">
      <div onClick={() => navigate(HOME_ROUTE)} className="imageNavbar">
        {isMobile ? (
          <img
            src={require('../../../shared/images/navbar/logo-mobile.png')}
            alt=""
          />
        ) : (
          <img src={require('../../../shared/images/navbar/logo.png')} alt="" />
        )}
      </div>
    </div>
  );
};

export default memo(Logo);
