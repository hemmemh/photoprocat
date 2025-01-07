import { useRef } from 'react';
import cls from './headerHome.module.scss';

export const HeaderHome = () => {
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  return (
    <section className={cls.headerHome}>
      <div ref={firstRef} className={cls.image}>
        <img src={require('../../../shared/images/home/header.png')} alt="" />
      </div>

      <div className={cls.container}>
        <h2 ref={secondRef} className={cls.texts}>
          <div className={cls.text}>
            <span className={cls.span2}>АРЕНДА</span> ФОТО{' '}
            <span className={cls.span}>И видео</span>
          </div>
          <div className={cls.text}>И видео</div>
          <div className={cls.text}>Оборудования</div>
        </h2>
      </div>
    </section>
  );
};
