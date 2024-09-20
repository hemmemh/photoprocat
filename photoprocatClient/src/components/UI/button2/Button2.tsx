import React, { FC, useRef, memo } from 'react';
import './button2.scss';

interface button {
  children?: React.ReactNode;
  className?: string;
  rippleClass?: string;
  ripple?: boolean;
  onClick?: (value: React.MouseEvent) => void;
}
const Button2: FC<button> = ({
  onClick = () => {},
  children,
  className = '',
  rippleClass = 'origin',
  ripple = true,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleEffect = (e: React.MouseEvent) => {
    if (ripple && buttonRef.current) {
      const target = e.target as HTMLElement;
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
      circle.style.left = `${e.clientX - radius - buttonRef.current.getBoundingClientRect().left}px`;
      circle.style.top = `${e.clientY - radius - buttonRef.current.getBoundingClientRect().top}px`;
      circle.classList.add(`ripple`);
      circle.classList.add(rippleClass);
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseDown={(e) => rippleEffect(e)}
      className={`Button2 ${className}`}
    >
      <span className="content">{children}</span>
    </button>
  );
};

export default memo(Button2);
