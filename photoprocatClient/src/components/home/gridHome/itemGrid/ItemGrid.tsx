import { useEffect, useRef } from 'react';
import cls from './itemGrid.module.scss';

export const ItemGrid = ({
  image,
  textOne,
  textTwo,
}: {
  image: string;
  textOne: string;
  textTwo: string;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const options = {
    root: itemRef.current,
    rootMargin: '0px',
    threshold: 0.4,
  };
  const callback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        entry.target.classList.add(cls.activeItem);
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    if (!itemRef.current) return;
    observer.observe(itemRef.current);
  }, []);

  return (
    <div ref={itemRef} className={cls.itemGridHome}>
      <div className={cls.cover}>
        <div className={cls.image}>
          <img
            loading="lazy"
            src={require(`../../../../images/home/grid/${image}`)}
            alt="изображение"
          />
        </div>
        <div className={cls.texts}>
          <div className={cls.text}>{textOne}</div>
          <div className={cls.text}>{textTwo}</div>
        </div>
      </div>
    </div>
  );
};
