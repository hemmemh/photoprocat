import React from 'react';
import ToggleUser from './toggleUser/ToggleUser';
import ChangeInfo from './changeInfo/ChangeInfo';
import Orders from './orders/Orders';
import Submit from './submit/Submit';

const BodyUser = () => {
  return (
    <div className="User__main ">
      <ToggleUser />
      <ChangeInfo />
      <Orders />
      <Submit />
    </div>
  );
};

export default BodyUser;
