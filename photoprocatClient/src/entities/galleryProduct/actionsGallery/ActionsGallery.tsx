import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { ReactComponent as CompareSvg } from '../../../images/compare.svg';
import { ReactComponent as StarSvg } from '../../../images/star.svg';
import './actionGallery.scss';
import Loader from '../../../components/UI/loader/Loader';
import useItemProduct from '../../../hooks/useItemProduct';

const ActionsGallery = () => {
  const { inCompare, inLoves, inBasket, loaders, product } = useAppSelector(
    (state) => state.reducer.product
  );
  const { addToLoves, addToCompare, inCompareSnippet, inLovesSnippet } =
    useItemProduct({ inBasket, inCompare, inLoves, data: product });

  const dispatch = useAppDispatch();

  return (
    <div className="actionsGallery">
      {loaders.compare ? (
        <CompareSvg
          onClick={() => dispatch(addToCompare)}
          className={
            inCompareSnippet ? 'actionGallery active' : 'actionGallery'
          }
        />
      ) : (
        <Loader />
      )}
      {loaders.love ? (
        <StarSvg
          onClick={addToLoves}
          className={inLovesSnippet ? 'actionGallery active' : 'actionGallery'}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ActionsGallery;
