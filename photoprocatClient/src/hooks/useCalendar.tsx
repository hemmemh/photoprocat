import React, { useEffect, useState } from 'react';

type Calendar = {
  calendarIcon: React.RefObject<HTMLImageElement>;
  calendarRef: React.RefObject<HTMLImageElement>;
};

const useCalendar = ({ calendarIcon, calendarRef }: Calendar) => {
  const [calendar, setcalendar] = useState<boolean>(false);

  const onCalendarFocus = () => {
    const a = document.querySelector(
      '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root'
    );
    a?.querySelector('input')?.focus();
  };

  useEffect(() => {
    document.addEventListener('click', onCalendar);
    document
      .querySelector(
        '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root input'
      )
      ?.addEventListener('click', onCalendar as EventListener);

    return () => document.removeEventListener('click', onCalendar);
  }, []);

  const onCalendar = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target !== calendarIcon.current) {
      if (!calendarRef.current?.contains(target)) {
        setcalendar(false);
      }
    }
  };

  return { onCalendarFocus, calendar, setcalendar };
};

export default useCalendar;
