import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { CircularProgress, Pagination, Skeleton } from '@mui/material';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../hooks/reduxHooks';
import {
  getAllInfo,
  getProducts,
} from '../../../store2/actions/CatalogActions';
import ProductItem from '../../../entities/productItem/ProductItem';
import './gridCatalog.scss';
import { IProduct } from '../../../https/productApi';
import { selectCheckedBrands, selectGridLoader, selectInformationValues, selectLimit, selectPage, selectPriceValue, selectProducts, selectProductsLoad, selectSort, selectSortNumber, selectTypeInformation } from '../../../store2/selectors/catalogSelectors';
import { selectBasket } from '../../../store2/selectors/basketSelectors';
import { selectLoves } from '../../../store2/selectors/loveSelectors';
import { selectCompare } from '../../../store2/selectors/compareSelectors';
import { selectFilterCatalog } from '../../../store2/selectors/navBarSelectors';

export const GridCatalog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const priceValue = useAppSelector(selectPriceValue)
  const sort = useAppSelector(selectSort)
  const checkedBrands = useAppSelector(selectCheckedBrands);
  const sortNumber = useAppSelector(selectSortNumber);
  const typeInformation = useAppSelector(selectTypeInformation);
  const informationValues = useAppSelector(selectInformationValues);
  const limit = useAppSelector(selectLimit);
  const productsLoad = useAppSelector(selectProductsLoad);
  const products = useAppSelector(selectProducts);
  const gridLoader = useAppSelector(selectGridLoader);
  const page = useAppSelector(selectPage);
  const basket = useAppSelector(selectBasket);
  const loves = useAppSelector(selectLoves);
  const compare = useAppSelector(selectCompare);
  const filterCatalog = useAppSelector(selectFilterCatalog);

  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const [loaderParams, setloaderParams] = useState(false);
  const [loaderInfo, setloaderInfo] = useState(0);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const newType = searchParams.get('type') ?? '';
    const newPage = searchParams.get('page') ?? '1';
    const newSort = searchParams.get('sort') ?? '';
    const newSortNumber = searchParams.get('sortNumber') ?? '1';
    const newPriceValue = searchParams.get('priceValue') ?? '[]';
    let minPrice = 0;
    let maxPrice = 10000000;
    if (JSON.parse(newPriceValue).length !== 0) {
      minPrice = JSON.parse(newPriceValue)[0];
      maxPrice = JSON.parse(newPriceValue)[1];
    }
    const newcheckedBrands = searchParams.get('checkedBrands') ?? '[]';
    const newInformationValues = searchParams.get('informationValues') ?? '{}';
    const newTypeInformation = searchParams.get('typeInformation') ?? '{}';

    dispatch(
      getAllInfo({
        newType,
        newPage,
        limit,
        search: '',
        newcheckedBrands,
        newSortNumber,
        minPrice,
        maxPrice,
        newSort,
        newInformationValues,
        newTypeInformation,
      })
    );
  }, []);

  useEffect(() => {
    setloaderParams(true);
    if (loaderParams) {
      console.log('%%');

      const newType = searchParams.get('type') ?? '';
      const newPage = searchParams.get('page') ?? '1';
      const newFilterCatalog = searchParams.get('filterCatalog') ?? '';
      const newSort = searchParams.get('sort') ?? 'date';
      const newSortNumber = searchParams.get('sortNumber') ?? '1';
      const newPriceValue = searchParams.get('priceValue') ?? '[]';
      let minPrice = 0;
      let maxPrice = 10000000;
      if (JSON.parse(newPriceValue).length !== 0) {
        minPrice = JSON.parse(newPriceValue)[0];
        maxPrice = JSON.parse(newPriceValue)[1];
      }
      const newcheckedBrands = searchParams.get('checkedBrands') ?? '[]';
      const newInformationValues =
        searchParams.get('informationValues') ?? '{}';
      const newTypeInformation = searchParams.get('typeInformation') ?? '{}';
      console.log('dd', newPage);

      dispatch(
        getProducts({
          newType,
          newPage,
          limit,
          search: newFilterCatalog,
          newcheckedBrands,
          newSortNumber,
          minPrice,
          maxPrice,
          newSort,
          newInformationValues,
          newTypeInformation,
        })
      );
    }
  }, [searchParams]);

  useEffect(() => {
    setloaderInfo((prev) => prev + 1);
    if (loaderInfo > 1) {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set('sort', sort);
      searchParams.set('sortNumber', String(sortNumber));
      searchParams.set('checkedBrands', JSON.stringify(checkedBrands));
      searchParams.set('informationValues', JSON.stringify(informationValues));
      searchParams.set('filterCatalog', JSON.stringify(filterCatalog));
      searchParams.set('priceValue', JSON.stringify(priceValue));
      searchParams.set('typeInformation', JSON.stringify(typeInformation));
      searchParams.set('page', '1');

      navigate({
        pathname: location.pathname,
        search: `?${searchParams.toString()}`,
      });
    }
  }, [
    sort,
    sortNumber,
    checkedBrands,
    informationValues,
    filterCatalog,
    priceValue,
  ]);


  const onPageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('page', String(page));
    navigate({
      pathname: location.pathname,
      search: `?${searchParams.toString()}`,
    });
  }

  

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
