import Navigation from '../UI/navigation/Navigation';
import { useAppSelector } from '../../hooks/reduxHooks';
import './loves.scss';
import SpinnerBody from '../UI/spinnerBody/SpinnerBody';
import ProductItem from '../../entities/productItem/ProductItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ICompareItem } from '../../https/compareApi';
import { IBasketItem } from '../../https/basketApi';
import { ILovesItem } from '../../https/lovesApi';
import { selectLoveLoad, selectLoves } from '../../store2/selectors/loveSelectors';
import { selectCompare } from '../../store2/selectors/compareSelectors';
import { selectBasket } from '../../store2/selectors/basketSelectors';

const MainLoves = () => {
  const loves = useAppSelector(selectLoves);
  const load = useAppSelector(selectLoveLoad);
  const compare = useAppSelector(selectCompare);
  const basket = useAppSelector(selectBasket);
  

  return (
    <div className="Loves">
      <div className="Loves__container">
        <div className="Loves__body">
          <Navigation navigationClass="news">Главная/Избранное</Navigation>
          {load ? (
            <SpinnerBody />
          ) : (
            <TransitionGroup className="Loves__grid">
              {loves?.lovesItems.map((e) => (
                <CSSTransition
                  key={e.product._id}
                  timeout={500}
                  classNames="loves"
                >
                  <ProductItem
                    key={e.product._id}
                    data={e.product}
                    inCompare={
                      compare?.compareItems.find(
                        (el: ICompareItem) => el.product?._id == e.product?._id
                      )
                        ? true
                        : false
                    }
                    inBasket={
                      basket?.basketItems.find(
                        (el: IBasketItem) => el.product?._id == e?._id
                      )
                        ? true
                        : false
                    }
                    inLoves={
                      loves.lovesItems.find(
                        (el: ILovesItem) => el.product?._id == e.product?._id
                      )
                        ? true
                        : false
                    }
                    className="catalogItem"
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainLoves;
