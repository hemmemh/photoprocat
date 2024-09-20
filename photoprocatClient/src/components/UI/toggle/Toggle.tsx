import React, { FC, memo } from 'react';
import './toggle.scss';

interface FooterProps {
  breakpoint?: number;
  children?: React.ReactNode[];
  oneOpen?: boolean;
  accordionClass?: string;
  toggleClass?: string;
  value: number;
  change: (value: number) => void;
  ripple?: boolean;
  rippleClass?: string;
}
const Toggle: FC<FooterProps> = memo(
  ({
    children,
    toggleClass = 'origin',
    value,
    change,
    ripple = true,
    rippleClass = 'origin',
  }) => {
    const rippleEffect = (e: React.MouseEvent<HTMLDivElement>) => {
      if (ripple) {
        const target = e.target as HTMLDivElement;
        e.stopPropagation();
        const circle = document.createElement('span');
        target.addEventListener('mouseup', () => {
          circle.style.opacity = '0';
          circle.addEventListener('transitionend', () => {
            circle.remove();
          });
        });
        target.addEventListener('mouseout', () => {
          circle.style.opacity = '0';
          circle.addEventListener('transitionend', () => {
            circle.remove();
          });
        });

        target.appendChild(circle);
        const diameter = Math.max(target.clientWidth, target.clientHeight);
        const radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - radius - target.getBoundingClientRect().left}px`;
        circle.style.top = `${e.clientY - radius - target.getBoundingClientRect().top}px`;
        circle.classList.add(`ripple`);
        circle.classList.add(rippleClass);
      }
    };

    const changeToggle = (i: number) => {
      change(i);
    };

    return (
      <div className={`Toggle ${toggleClass}`}>
        {children &&
          children.map((e, i) => (
            <div
              onMouseDown={(e) => rippleEffect(e)}
              key={Math.random().toString(36).substring(2, 7)}
              onClick={() => changeToggle(i)}
              className={value === i ? 'Toggle__item active' : 'Toggle__item'}
            >
              {e}
            </div>
          ))}
      </div>
    );
  }
);

export default Toggle;
