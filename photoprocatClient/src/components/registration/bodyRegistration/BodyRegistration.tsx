import { useEffect, useRef, useState } from 'react';
import Input from '../../UI/input/Input';
import { registrationSlice } from '../../../store2/reducers/RegistrationSlice';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  DateCalendar,
  DateField,
  LocalizationProvider,
} from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import {
  changePassword,
  onSetMail,
} from '../../../store2/actions/RegistrationActions';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import './bodyRegistration.scss';
import { selectMail, selectPassword, selectSecondName, selectValidationEmail, selectValidationPassword } from '../../../store2/selectors/registrationSelectors';
import { selectData, selectName, selectTell } from '../../../store2/selectors/userSelectors';

const BodyRegistration = () => {
  const calendarIcon = useRef<HTMLImageElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const [calendar, setcalendar] = useState<boolean>(false);
  const secondName = useAppSelector(selectSecondName);
  const name = useAppSelector(selectName);
  const mail = useAppSelector(selectMail);
  const data = useAppSelector(selectData);
  const password = useAppSelector(selectPassword);
  const tell = useAppSelector(selectTell);
  const validationEmail = useAppSelector(selectValidationEmail);
  const validationPassword = useAppSelector(selectValidationPassword);
  const { setData, setName, setSecondName, setTell } =
    registrationSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.addEventListener('click', onCalendar);
    const div = document.querySelector(
      '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root input'
    );
    if (div) {
      div.addEventListener('click', onCalendar as EventListener);
    }

    return () => document.removeEventListener('click', onCalendar);
  }, []);

  const onCalendar = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      e.target !== calendarIcon.current &&
      !calendarRef.current?.contains(target)
    )
      setcalendar(false);
  };

  return (
    <div className="body">
      <Input
        value={secondName}
        change={(e: string) => dispatch(setSecondName(e))}
        inputClass="registration"
        placeholder="Фамилия *"
      />
      <Input
        value={name}
        change={(e: string) => dispatch(setName(e))}
        inputClass="registration"
        placeholder="Имя *"
      />
      <Input
        value={mail}
        change={(e: string) => dispatch(onSetMail(e))}
        inputClass={validationEmail ? 'registration' : 'registration act'}
        placeholder="E-mail *"
      />
      <Input
        value={dayjs(data).toString()}
        change={(e) => dispatch(setData(e.toString()))}
        inputClass="registration g"
        lock={true}
        placeholder="Дата рождения"
      >
        <div
          onClick={() => setcalendar((prev) => !prev)}
          className="calendar-icon"
        >
          <img
            ref={calendarIcon}
            src={require('../../../images/user/calendar.png')}
            alt=""
          />
        </div>
        <div
          ref={calendarRef}
          className={calendar ? 'calendar active' : 'calendar'}
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
      <Input
        value={password}
        change={(e: string) => dispatch(changePassword(e))}
        inputClass={validationPassword ? 'registration' : 'registration act'}
        placeholder="Пароль"
      />
      <Input
        value={tell}
        change={(e: string) => dispatch(setTell(e))}
        inputClass="registration"
        placeholder="Мобильный *"
      />
    </div>
  );
};

export default BodyRegistration;
