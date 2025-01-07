import { FC, memo, useEffect, useRef, useState } from 'react';
import './input.scss';

interface button {
  inputClass?: string;
  placeholder?: string;
  children?: React.ReactNode;
  lock?: boolean;
  value: string;
  change: (value: string) => void;
}
const Input: FC<button> = ({
  inputClass = 'origin',
  placeholder = 'name',
  children,
  lock = false,
  value,
  change,
}) => {
  const [active, setactive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log(value, ')(11');

    document.addEventListener('click', addClick);
    if (lock) {
      setactive(true);
    }

    if (value !== '') {
      setactive(true);
    }

    return () => document.removeEventListener('click', addClick);
  }, []);
  useEffect(() => {
    if (value !== '') {
      setactive(true);
    }
  }, [value]);

  const addClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      inputRef.current &&
      !lock &&
      !inputRef.current.contains(target) &&
      input2Ref.current &&
      input2Ref.current.value == ''
    ) {
      setactive(false);
    }
  };

  const onFocus = () => {
    setactive(true);
    input2Ref.current && input2Ref.current.focus();
  };

  return (
    <div
      ref={inputRef}
      onClick={() => onFocus()}
      className={active ? `Input ${inputClass} active` : `Input ${inputClass}`}
    >
      <input
        value={value}
        onChange={(e) => change(e.target.value)}
        ref={input2Ref}
        className="Input__text"
        type="text"
      />
      <div
        className={active ? 'Input__placeholder active' : 'Input__placeholder'}
      >
        {placeholder}
      </div>
      {children}
    </div>
  );
};

export default memo(Input);
