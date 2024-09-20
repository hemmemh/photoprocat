import { useState } from 'react';
import { userSlice } from '../../../../store2/reducers/UserSlice';
import { onLogout } from '../../../../store2/actions/UserActions';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import './toggleUser.scss';
import Radio from '../../../UI/radio/Radio';
import Button2 from '../../../UI/button2/Button2';

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
