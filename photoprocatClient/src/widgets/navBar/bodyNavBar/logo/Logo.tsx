import { useNavigate } from 'react-router-dom';
import useCheckMobileScreen from '../../../../hooks/DetectMobileHook';
import { HOME_ROUTE } from '../../../../app/config/routs';
import { memo } from 'react';
import './logo.scss';

export const Logo = () => {
  const navigate = useNavigate();
  const isMobile = useCheckMobileScreen(767.98);

  return (
    <div className="logoNavbar">
      <div onClick={() => navigate(HOME_ROUTE)} className="imageNavbar">
        {isMobile ? (
          <img
            src={require('../../../../images/navbar/logo-mobile.png')}
            alt=""
          />
        ) : (
          <img src={require('../../../../images/navbar/logo.png')} alt="" />
        )}
      </div>
    </div>
  );
};

export default memo(Logo);
