import { useRef, useState } from 'react';
import {
  changeActiveType,
  removeByType,
} from '../../../entities/compareItem/model/CompareActions';
import './itemsComapre.scss';
import { selectActiveType, selectCompare, selectCompareTypes } from '../../../entities/compareItem/model/compareSelectors';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/reduxHooks';
import useItemsClick from '../../../shared/hooks/useItemsClick';

const ItemsCompare = () => {

  const activeType = useAppSelector(selectActiveType);
  const compareTypes = useAppSelector(selectCompareTypes);
  const compare = useAppSelector(selectCompare);
  const dispatch = useAppDispatch();
  const actionRef = useRef<HTMLDivElement>(null);
  const actionRef2 = useRef<HTMLDivElement>(null);
  const [itemsView, setitemsView] = useState<boolean>(false);

  useItemsClick({ actionRef, actionRef2, setitemsView });

  return (
    <div className="Compare__items items-compare">
      <div
        ref={actionRef2}
        className="items-compare__cover"
        onClick={() => setitemsView((prev) => !prev)}
      >
        <div
          className={
            itemsView ? 'items-compare__action active' : 'items-compare__action'
          }
        >
          {' '}
          <span></span>
        </div>
      </div>

      <div
        onClick={() => dispatch(removeByType())}
        className="items-compare__delete _icon-delete"
      ></div>

      <div
        ref={actionRef}
        className={
          itemsView ? 'items-compare__body active' : 'items-compare__body'
        }
      >
        {compareTypes.map((el) => (
          <div
            key={el}
            onClick={() => dispatch(changeActiveType(el))}
            className={
              activeType === el
                ? 'items-compare__item active'
                : 'items-compare__item'
            }
          >
            {el} (
            {compare?.compareItems.filter((ell) => ell.product.type.name === el)
              .length ?? 0}
            )
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsCompare;
