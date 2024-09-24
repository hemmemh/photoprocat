import React, { useEffect, useRef, useState, FC, memo } from 'react';
import './accordionUser.scss';

interface FooterItemProps {
  active?: boolean;
  activeItem?: boolean;
  visible?: boolean;
  children?: React.ReactNode[];
  accordion?: () => void;
  controll?: boolean;
  lock?: boolean;
}

const AccordionUserItem: FC<FooterItemProps> = ({
  active,
  visible,
  accordion,
  children,
  activeItem,
  controll,
  lock,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const acc = useRef(activeItem);

  const [controllActive, setcontrollActive] = useState(false);

  useEffect(() => {
    if (!lock && itemRef.current) {
      itemRef.current.style.height = '0px';
    }
  }, []);

  useEffect(() => {
    if (lock && itemRef.current) {
      itemRef.current.style.height = 'auto';
    } else if (itemRef.current) {
      itemRef.current.style.height = '0px';
    }
  }, [lock]);

  useEffect(() => {
    if (!lock) {
      acc.current = activeItem;
      if (controll && itemRef.current) {
        if (activeItem || active) {
          itemRef.current.style.height = `${itemRef.current.scrollHeight}px`;
          itemRef.current.style.boxSizing = 'content-box';
          setTimeout(() => {
            itemRef.current && (itemRef.current.style.height = `auto`);
          }, 300);
        } else {
          itemRef.current.style.height = `${itemRef.current.scrollHeight}px`;
          setTimeout(() => {
            itemRef.current && (itemRef.current.style.height = '0');
          }, 1);
        }
      } else {
        if (controllActive && itemRef.current) {
          itemRef.current.style.height = `${itemRef.current.scrollHeight}px`;
          itemRef.current.style.boxSizing = 'content-box';
          setTimeout(() => {
            itemRef.current && (itemRef.current.style.height = `auto`);
          }, 300);
        } else {
          itemRef.current &&
            (itemRef.current.style.height = `${itemRef.current.scrollHeight}px`);
          setTimeout(() => {
            itemRef.current && (itemRef.current.style.height = '0');
          }, 1);
        }
      }
    }
  }, [visible, active]);

  const buttonClick = () => {
    if (!lock && accordion) {
      accordion();
      setcontrollActive((prev) => !prev);
    }
  };

  return (
    <div className="AccordionUser__bodyCover">
      <div
        onClick={() => buttonClick()}
        className={
          activeItem
            ? 'AccordionUser__button  active _icon-arrow-next active'
            : 'AccordionUser__button _icon-arrow-next'
        }
      >
        {children && children[0]}
      </div>
      <div ref={itemRef} className="AccordionUser__body">
        {children?.slice(1).map((e) => (
          <div
            key={e?.toLocaleString()}
            ref={childRef}
            className={
              activeItem ? 'AccordionUser__item active' : 'AccordionUser__item'
            }
          >
            {e}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(AccordionUserItem);
