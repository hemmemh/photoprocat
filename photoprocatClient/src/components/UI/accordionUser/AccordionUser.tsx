import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  FC,
  cloneElement,
  memo,
} from 'react';
import './accordionUser.scss';

interface FooterProps {
  breakpoint?: number;
  children?: React.ReactNode;
  controll?: boolean;
  VisibleAll?: boolean;
  accordionClass?: string;
  lock?: boolean;
}

const AccordionUser: FC<FooterProps> = ({
  breakpoint = 7677.98,
  children,
  controll = true,
  VisibleAll,
  accordionClass = 'origin',
  lock = false,
}) => {
  const [active, setactive] = useState(false);
  const [visible, setVisible] = useState<number | null>(null);
  const accordRef = useRef<HTMLDivElement>(null);
  //при нажатии на один аккордион другой закрывается
  const accordion = useCallback(
    (i: number | null) => {
      if (visible === i) {
        setVisible(null);
      } else {
        setVisible(i);
      }
    },
    [visible]
  );

  //закрытие или открытие всех аккордионов при брейкпоинте
  const ff2 = useCallback(() => {
    const clientWidth = window.innerWidth;
    if (clientWidth <= breakpoint) {
      setactive(false);
    } else {
      setactive(true);
    }
  }, []);

  //определяет открыты или закрыты все аккордионы в начале
  useEffect(() => {
    const clientWidth = window.innerWidth;

    if (clientWidth <= breakpoint) {
      setactive(false);
    } else {
      setactive(true);
    }

    window.addEventListener('resize', ff2);

    return () => {
      window.removeEventListener('resize', ff2);
    };
  }, []);

  useEffect(() => {
    if (!VisibleAll) {
      setVisible(null);
      setactive(false);
    }
  }, [VisibleAll]);

  return (
    <div ref={accordRef} className={`AccordionUser ${accordionClass}`}>
      {React.Children.map?.(children, (child, i) =>
        cloneElement(child as React.ReactElement, {
          active: active,
          lock: lock,
          controll: controll,
          activeItem: visible === i ? true : false,
          accordion: () => accordion(i),
          visible: visible,
          accordRef: accordRef,
        })
      )}
    </div>
  );
};

export default memo(AccordionUser);
