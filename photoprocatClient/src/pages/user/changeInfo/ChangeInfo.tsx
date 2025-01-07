import { useState, useRef, useEffect } from 'react';
import Input from '../../../shared/UI/input/Input';
import dayjs from 'dayjs';
import {
  DateCalendar,
  DateField,
  LocalizationProvider,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { userSlice } from '../../../entities/user/model/UserSlice';
import './changeInfo.scss';
import { selectData, selectName, selectSerName, selectTell, selectToggle, selectUser } from '../../../entities/user/model/userSelectors';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/reduxHooks';
import useCalendar from '../../../shared/hooks/useCalendar';

const ChangeInfo = () => {
  const toggle = useAppSelector(selectToggle);
  const name = useAppSelector(selectName);
  const serName = useAppSelector(selectSerName);
  const tell = useAppSelector(selectTell);
  const data = useAppSelector(selectData);
  const user = useAppSelector(selectUser);
  const { setSerName, setName, setData, setTell } = userSlice.actions;
  const [mail, setmail] = useState<string>(user?.mail ?? '');
  const dispatch = useAppDispatch();
  const calendarRef = useRef<HTMLImageElement>(null);
  const calendarIcon = useRef<HTMLImageElement>(null);
  const { onCalendarFocus, calendarVisible, setcalendarVisible } = useCalendar({
    calendarRef,
    calendarIcon,
  });

  useEffect(() => {
    dispatch(setName(user?.name ?? ''));
    dispatch(setSerName(user?.sername ?? ''));
    dispatch(setTell(user?.tell ?? ''));
    if (user?.birthDate !== '') {
      dispatch(setData(user?.birthDate ?? ''));
    }
  }, []);

  return (
    <div
      className={
        toggle === 0 ? 'User__body body-user active' : 'User__body body-user'
      }
    >
      <Input
        value={serName}
        change={(e) => dispatch(setSerName(e))}
        placeholder="Фамилия *"
      />
      <Input
        value={name}
        change={(e) => dispatch(setName(e))}
        placeholder="Имя *"
      />
      <div onClick={onCalendarFocus} className="body-user__gg">
        <Input
          value={dayjs(data).toString()}
          change={(e) => dispatch(setData(e.toString()))}
          lock={true}
          inputClass="origin g"
          placeholder="Дата рождения"
        >
          <div
            onClick={() => setcalendarVisible((prev) => !prev)}
            className="body-user__calendar-icon"
          >
            <img
              ref={calendarIcon}
              src={require('../../../shared/images/user/calendar.png')}
              alt=""
            />
          </div>
          <div
            ref={calendarRef}
            className={
              calendarVisible ? 'body-user__calendar active' : 'body-user__calendar'
            }
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={dayjs(data)}
                onChange={(newValue) =>
                  dispatch(setData(newValue?.toString() ?? ''))
                }
              />
            </LocalizationProvider>
          </div>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateField
              label="Controlled field"
              value={dayjs(data)}
              onChange={(newValue) =>
                dispatch(setData(newValue?.toString() ?? ''))
              }
            />
          </LocalizationProvider>
        </Input>
      </div>

      <Input
        value={tell}
        change={(newValue) => dispatch(setTell(newValue))}
        placeholder="Мобильный *"
      />
      <Input value={mail} change={setmail} placeholder="E-mail *" />
    </div>
  );
};

export default ChangeInfo;
