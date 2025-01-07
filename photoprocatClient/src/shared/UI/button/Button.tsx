import { FC, memo, useRef } from 'react';
import './button.scss';

interface button {
  children?: React.ReactNode;
  className?: string;
  classNameCover?: string;
  ripple?: boolean;
  rippleClass?: string;
  onClick?: (value: React.MouseEvent) => void;
}
const Button: FC<button> = ({
  onClick = () => {},
  children,
  className = 'origin',
  classNameCover = 'origin',
  ripple = true,
  rippleClass = 'origin',
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleEffect = (e: React.MouseEvent<HTMLElement>) => {
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
      console.log(e.clientX, e.clientY, 'yyyyyj');

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
      className={`Button ${className}`}
    >
      <div className="Button__cover">
        <div className={`Button__absolute ${classNameCover}`}>{children}</div>
      </div>
    </button>
  );
};

export default memo(Button);
