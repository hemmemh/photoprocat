import { memo } from 'react';
import './tagsProduct.scss';

const TagsProduct = () => {
  return (
    <div className="main-product__tags tags-product">
      <div className="tags-product__tag">Камера</div>
      <div className="tags-product__tag  tags-product__tag_big">Объектив</div>
      <div className="tags-product__tag">Фото</div>
      <div className="tags-product__tag  tags-product__tag_big">
        Изображение
      </div>
      <div className="tags-product__tag">Кэнон</div>
      <div className="tags-product__tag  tags-product__tag_big">Стекло</div>
      <div className="tags-product__tag">Аренда</div>
      <div className="tags-product__tag  tags-product__tag_big">Цифровой</div>
    </div>
  );
};

export default memo(TagsProduct);
