import { useState } from 'react';
import { userSlice } from '../../../entities/user/model/UserSlice';
import { onLogout } from '../../../entities/user/model/UserActions';
import './toggleUser.scss';
import Radio from '../../../shared/UI/radio/Radio';
import Button2 from '../../../shared/UI/button2/Button2';
import { useAppDispatch } from '../../../shared/hooks/reduxHooks';

const ToggleUser = () => {
  const [item, setitem] = useState<string | number>('Мои данные');
  const { setToggle } = userSlice.actions;
  const dispatch = useAppDispatch();
  const items = ['Мои данные', 'История заказов'];

  return (
    <div className="User__toggle toggle-user">
      {items.map((el, id) => (
        <Radio id={el} key={el} value={item} setValue={setitem}>
          <Button2
            onClick={() => dispatch(setToggle(id))}
            className="toggle-user__item"
          >
            {el}
          </Button2>
        </Radio>
      ))}
      <Button2
        onClick={() => dispatch(onLogout())}
        className="toggle-user__item"
      >
        Выйти
      </Button2>
    </div>
  );
};

export default ToggleUser;
