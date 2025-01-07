import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { selectCheckedBrands, selectInformationValues, selectLimit, selectPriceValue, selectSort, selectSortNumber, selectTypeInformation } from "../../entities/catalog/model/catalogSelectors";
import { getAllInfo, getProducts } from "../../entities/catalog/model/CatalogActions";
import { selectFilterCatalog } from "../../entities/navBar/model/navBarSelectors";


const useCatalogSearchParams = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const priceValue = useAppSelector(selectPriceValue)
    const sort = useAppSelector(selectSort)
    const checkedBrands = useAppSelector(selectCheckedBrands);
    const sortNumber = useAppSelector(selectSortNumber);
    const typeInformation = useAppSelector(selectTypeInformation);
    const informationValues = useAppSelector(selectInformationValues);
    const filterCatalog = useAppSelector(selectFilterCatalog);
    const limit = useAppSelector(selectLimit);
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

      return {onPageChange, limit}

};

export default useCatalogSearchParams;
