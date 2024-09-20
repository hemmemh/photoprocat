import { FC, useEffect, useRef, useState } from 'react';
import './fold.scss';

interface FooterProps {
  slice?: number;
  children?: React.ReactNode[];
  changeName?: boolean;
  lock?: boolean;
  navigationClass?: string;
  foldClass?: string;
  value: boolean;
  foldActive?: (value: boolean) => void;
}
const Fold: FC<FooterProps> = ({
  value,
  foldActive = () => {},
  children,
  slice = 1,
  foldClass = 'origin',
}) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  useEffect(() => {
    if (!bodyRef.current) return;
    const sliceChildren: HTMLElement[] = [].slice.call(
      bodyRef.current.children
    );
    console.log(' sliceChildren', bodyRef.current, bodyRef.current.children);
    if (bodyRef.current && sliceChildren.length > slice && !value) {
      sliceChildren
        .slice(slice, sliceChildren.length)
        .forEach((el: HTMLElement) => {
          el.style.display = 'none';
        });
      let sliceHeight = 0;

      console.log(' sliceChildren2', slice);
      sliceChildren.slice(0, slice).forEach((el) => {
        sliceHeight += el.offsetHeight;
      });

      setTimeout(() => {
        bodyRef.current && (bodyRef.current.style.height = `${sliceHeight}px`);
      }, 10);
    } else {
      foldActive(false);
    }
  }, []);

  useEffect(() => {
    setIsFirstLoad(false);
    if (isFirstLoad) return;
    if (!bodyRef.current) return;
    const sliceChildren: HTMLElement[] = [].slice.call(
      bodyRef.current.children
    );
    if (bodyRef.current && sliceChildren.length > slice) {
      if (value) {
        console.log('^^!', value);
        let sliceHeight = 0;
        console.log(bodyRef.current, 'ty');

        sliceChildren.slice(0, slice).forEach((el) => {
          sliceHeight += el.offsetHeight;
        });
        bodyRef.current.style.height = `${sliceHeight}px`;
        sliceChildren.slice(slice, sliceChildren.length).forEach((el) => {
          el.style.display = 'inherit';
        });
        bodyRef.current.style.height = `${bodyRef.current.scrollHeight}px`;
        setTimeout(() => {
          bodyRef.current && (bodyRef.current.style.height = `auto`);
        }, 300);
      } else {
        console.log('^^', value);

        let sliceHeight = 0;
        bodyRef.current.style.height = `${bodyRef.current.scrollHeight}px`;

        sliceChildren.slice(0, slice).forEach((el) => {
          sliceHeight += el.offsetHeight;
        });
        bodyRef.current.style.height = `${sliceHeight}px`;

        setTimeout(() => {
          sliceChildren.slice(slice, sliceChildren.length).forEach((el) => {
            el.style.display = 'none';
          });
          bodyRef.current && (bodyRef.current.style.height = `auto`);
        }, 300);
      }
    }
  }, [value]);

  return (
    <div className={`Fold ${foldClass}`}>
      <div ref={bodyRef} className="Fold__body">
        {children &&
          children.slice(0, children.length).map((e, id: number) => (
            <div key={id} className="Fold__item">
              {e}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Fold;
