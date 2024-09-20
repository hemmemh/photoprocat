import { FC, useEffect, useRef } from 'react';
import './foldText.scss';

interface FooterProps {
  symbols?: number;
  children?: React.ReactNode;
  foldClass?: string;
  value: boolean;
  foldActive: (value: boolean) => void;
}
const FoldText: FC<FooterProps> = ({
  value,
  foldActive,
  children,
  symbols = 10,
  foldClass = 'origin',
}) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const bodyAbsolute1 = useRef<HTMLDivElement>(null);
  const bodyAbsolute2 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (
      typeof children === 'string' &&
      children &&
      symbols < children.length &&
      !value &&
      bodyAbsolute1.current
    ) {
      bodyAbsolute1.current.style.position = 'absolute';
      bodyAbsolute1.current.style.opacity = '0';
    } else {
      foldActive(false);
    }
  }, []);

  useEffect(() => {
    if (
      bodyRef.current &&
      bodyAbsolute1.current &&
      bodyAbsolute2.current &&
      bodyRef.current
    ) {
      if (
        typeof children === 'string' &&
        children &&
        symbols < children.length &&
        value
      ) {
        bodyRef.current.style.height = `${bodyRef.current.offsetHeight}px`;
        bodyAbsolute1.current.style.position = 'inherit';
        bodyAbsolute1.current.style.opacity = '1';
        bodyAbsolute2.current.style.position = 'absolute';
        bodyAbsolute2.current.style.opacity = '0';
        bodyRef.current.style.height = `${bodyRef.current.scrollHeight}px`;
        setTimeout(() => {
          bodyRef.current && (bodyRef.current.style.height = `auto`);
        }, 300);
      } else if (
        typeof children === 'string' &&
        children &&
        symbols < children.length
      ) {
        bodyRef.current.style.height = `${bodyRef.current.scrollHeight}px`;
        bodyAbsolute1.current.style.position = 'absolute';
        bodyAbsolute1.current.style.opacity = '0';
        bodyAbsolute2.current.style.opacity = '1';
        bodyAbsolute2.current.style.position = 'inherit';
        bodyRef.current.style.height = `${bodyAbsolute2.current.offsetHeight}px`;
        setTimeout(() => {
          bodyRef.current && (bodyRef.current.style.height = `auto`);
        }, 300);
      }
    }
  }, [value]);

  return (
    <div className={`Fold ${foldClass}`}>
      <div ref={bodyRef} className="Fold__body">
        <div ref={bodyAbsolute1} className="Fold__bodyAbsolute">
          {children}
        </div>
        {typeof children === 'string' &&
          children &&
          symbols < children.length && (
            <div ref={bodyAbsolute2} className="Fold__bodyAbsolute2">
              {' '}
              {children &&
                children.slice(0, symbols).replace(/\s{1,}$/, '') + '...'}
            </div>
          )}
      </div>
    </div>
  );
};

export default FoldText;
