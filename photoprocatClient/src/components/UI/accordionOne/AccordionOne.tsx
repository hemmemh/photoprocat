import { useCallback, useEffect, useRef, useState, FC } from 'react';
import './accordionOne.scss';

interface FooterProps {
  breakpoint?: number;
  children?: React.ReactNode[];
  oneOpen?: boolean;
  setVisibleAccordion?: (value: boolean) => void;
  accordionClass?: string;
}

const AccordionOne: FC<FooterProps> = ({
  breakpoint = 8000,
  children,
  accordionClass = 'origin',
}) => {
  const [active, setactive] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  const accordRef = useRef<HTMLDivElement>(null);
  //при нажатии на один аккордион другой закрывается

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
    if (!itemRef.current) return;
    itemRef.current.style.height = '0px';
    window.addEventListener('resize', gg);

    return () => {
      window.removeEventListener('resize', gg);
    };
  }, []);

  const gg = () => {};

  useEffect(() => {
    //setVisibleAccordion(false)
    if (!itemRef.current) return;
    if (active) {
      //itemRef.current.style.boxSizing = 'content-box'
      itemRef.current.style.height = `${itemRef.current.scrollHeight}px`;
      setTimeout(() => {
        itemRef.current && (itemRef.current.style.height = 'auto');
      }, 300);
    } else {
      itemRef.current.style.height = `${itemRef.current.scrollHeight}px`;
      setTimeout(() => {
        itemRef.current && (itemRef.current.style.height = '0px');
      }, 5);
    }
  }, [active]);

  const changeOnClick = () => {
    //itemRef.current.style.height= 'auto'
    //itemRef.current.style.boxSizing = 'border-box'
    //itemRef.current.style.height =`${itemRef.current.scrollHeight}px`
  };

  return (
    <div ref={accordRef} className={`AccordionOne ${accordionClass}`}>
      <div className="AccordionOne__bodyCover">
        <div
          onClick={() => setactive((prev) => !prev)}
          className={
            active
              ? 'AccordionOne__button  active _icon-arrow-next active'
              : 'AccordionOne__button _icon-arrow-next'
          }
        >
          {children && children[0]}
        </div>
        <div
          onClick={() => changeOnClick()}
          ref={itemRef}
          className="AccordionOne__body"
        >
          <div className="AccordionOne__bodytwo">{children && children[1]}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionOne;
