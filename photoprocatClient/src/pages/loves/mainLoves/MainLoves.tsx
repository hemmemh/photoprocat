import { selectBasket } from '../../../entities/basketProduct/model/basketSelectors';
import { selectCompare } from '../../../entities/compareItem/model/compareSelectors';
import { selectLoveLoad, selectLoves } from '../../../entities/loves/model/loveSelectors';
import ProductItem from '../../../entities/productItem/ui/ProductItem';
import { useAppSelector } from '../../../shared/hooks/reduxHooks';
import { IBasketItem } from '../../../shared/https/basketApi';
import { ICompareItem } from '../../../shared/https/compareApi';
import { ILovesItem } from '../../../shared/https/lovesApi';
import Navigation from '../../../shared/UI/navigation/Navigation';
import SpinnerBody from '../../../shared/UI/spinnerBody/SpinnerBody';
import './loves.scss';

import { CSSTransition, TransitionGroup } from 'react-transition-group';


const MainLoves = () => {
  const loves = useAppSelector(selectLoves);
  const load = useAppSelector(selectLoveLoad);
  const compare = useAppSelector(selectCompare);
  const basket = useAppSelector(selectBasket);
  

  return (
    <main className="Loves">
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
    </main>
  );
};

export default MainLoves;
