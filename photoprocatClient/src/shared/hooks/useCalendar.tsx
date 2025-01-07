import React, { useEffect, useState } from 'react';

type Calendar = {
  calendarIcon: React.RefObject<HTMLImageElement>;
  calendarRef: React.RefObject<HTMLImageElement>;
};

const useCalendar = ({ calendarIcon, calendarRef }: Calendar) => {
  const [calendarVisible, setcalendarVisible] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener('click', onCalendarClick);
    document
      .querySelector(
        '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root input'
      )
      ?.addEventListener('click', onCalendarClick as EventListener);

    return () => document.removeEventListener('click', onCalendarClick);
  }, []);

  const onCalendarFocus = () => {
    const a = document.querySelector(
      '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root'
    );
    a?.querySelector('input')?.focus();
  };

  const onCalendarClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target !== calendarIcon.current) {
      if (!calendarRef.current?.contains(target)) {
        setcalendarVisible(false);
      }
    }
  };

  return { onCalendarFocus, calendarVisible, setcalendarVisible };
};

export default useCalendar;
