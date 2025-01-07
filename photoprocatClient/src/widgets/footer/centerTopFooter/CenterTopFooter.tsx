import './centerTopFooter.scss';
import { memo } from 'react';

const CenterTopFooter = () => {
  return (
    <div className="topFooter__center centerTopFooter">
      <input
        type="text"
        placeholder="Введите e-mail"
        className="centerTopFooter__input"
      />
      <div className="centerTopFooter__button _icon-mail">
        <span>Подписаться</span>{' '}
      </div>
    </div>
  );
};
export default memo(CenterTopFooter);
