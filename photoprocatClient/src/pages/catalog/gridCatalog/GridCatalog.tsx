import { CircularProgress, Pagination, Skeleton } from '@mui/material';
import ProductItem from '../../../entities/productItem/ui/ProductItem';
import './gridCatalog.scss';
import { selectGridLoader, selectPage, selectProducts, selectProductsLoad } from '../../../entities/catalog/model/catalogSelectors';
import { selectBasket } from '../../../entities/basketProduct/model/basketSelectors';
import { selectLoves } from '../../../entities/loves/model/loveSelectors';
import { selectCompare } from '../../../entities/compareItem/model/compareSelectors';
import { useAppSelector } from '../../../shared/hooks/reduxHooks';
import { IProduct } from '../../../shared/https/productApi';
import useCatalogSearchParams from '../../../shared/hooks/useCatalogSearchParams';

export const GridCatalog = () => {

  const productsLoad = useAppSelector(selectProductsLoad);
  const products = useAppSelector(selectProducts);
  const gridLoader = useAppSelector(selectGridLoader);
  const page = useAppSelector(selectPage);
  const basket = useAppSelector(selectBasket);
  const loves = useAppSelector(selectLoves);
  const compare = useAppSelector(selectCompare);
  const {onPageChange, limit} = useCatalogSearchParams()

  return (
    <>
      {productsLoad ? (
        <div className="gridCover">
          <div className="grid">
            {products.responce?.map((e: IProduct) => (
              <ProductItem
                key={e._id}
                data={e}
                inCompare={
                  compare?.compareItems.find((el) => el.product?._id == e._id)
                    ? true
                    : false
                }
                inBasket={
                  basket?.basketItems.find((el) => el.product?._id == e._id)
                    ? true
                    : false
                }
                inLoves={
                  loves?.lovesItems.find((el) => el.product?._id == e._id)
                    ? true
                    : false
                }
                className="catalogItem"
              />
            ))}
          </div>
          <div className="pagination">
            <Pagination
              page={+page}
              onChange={onPageChange}
              count={
                products?.responceAll
                  ? Math.ceil(products.responceAll.length / +limit)
                  : 1
              }
              variant="outlined"
            />
          </div>
        </div>
      ) : (
        <div className="grid">
          {Array(10)
            .fill(0)
            .map((e, i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                height={300}
                animation="wave"
              />
            ))}
        </div>
      )}
      {gridLoader && (
        <div className="gridLoader">
          <CircularProgress />
        </div>
      )}
    </>
  );
};
