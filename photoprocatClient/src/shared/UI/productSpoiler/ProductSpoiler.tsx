import {
  useCallback,
  useEffect,
  useRef,
  useState,
  FC,
  ReactNode,
  memo,
} from 'react';
import './productSpoiler.scss';

interface FooterProps {
  name?: string;
  children?: ReactNode[];
  changeName?: boolean;
  lock?: boolean;
  className?: string;
}

const ProductSpoiler: FC<FooterProps> = memo(
  ({ children, changeName = true, className = '', lock = false }) => {
    const activeRef = useRef<boolean>();
    const stringRef = useRef(Math.random().toString(36).substring(2, 7));

    const spoilerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);

    const [active, setactive] = useState(false);
    activeRef.current = active;

    useEffect(() => {
      document.addEventListener('click', addClick);

      if (lock) {
        setactive(true);
      }

      return () => document.removeEventListener('click', addClick);
    }, []);

    const addClick = useCallback((e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        spoilerRef.current &&
        target !== spoilerRef.current &&
        !spoilerRef.current.contains(target)
      ) {
        setactive(false);

        return;
      }
    }, []);

    const click = useCallback(() => {
      setactive((prev) => !prev);
    }, []);

    const setName = (e: React.MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        changeName &&
        headerRef.current &&
        headerRef.current.firstElementChild
      ) {
        headerRef.current.firstElementChild.textContent = target.textContent;
      }
    };

    return (
      <div
        ref={spoilerRef}
        id={stringRef.current}
        className={`spoiler ${className} ${active && 'active'}`}
      >
        <div
          ref={headerRef}
          onClick={click}
          className={'spoiler__header active'}
        >
          {children && children[0]}
        </div>

        <div ref={bodyRef} className={'spoiler__cover'}>
          <div onClick={setName} className="spoiler__body">
            {children && children[1]}
          </div>
        </div>
      </div>
    );
  }
);

export default memo(ProductSpoiler);
