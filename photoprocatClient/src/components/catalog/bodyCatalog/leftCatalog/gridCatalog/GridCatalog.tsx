
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { CircularProgress, Pagination, Skeleton } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/reduxHooks";
import { getAllInfo, getProducts, setPage, updateProducts } from "../../../../../store2/actions/ProductActions";
import ProductItem from "../../../../productItem/ProductItem";


export const GridCatalog = () => {
 

  const navigate = useNavigate();
  const location = useLocation();
  
      const {priceValue,checkedBrands,sort,sortNumber,typeInformation,informationValues,limit,productsLoad,products,basket,loves,compare,gridLoader,page,type} = useAppSelector((state)=>state.reducer.catalog)
      const {filterCatalog} = useAppSelector((state)=>state.reducer.navbar)
      const dispatch = useAppDispatch()
      const [searchParams] = useSearchParams();
      const [loaderParams, setloaderParams] = useState(false)
      const [loaderInfo, setloaderInfo] = useState(0)

      useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const newType = searchParams.get("type") ??  ''
        const newPage = searchParams.get("page") ?? 1
        const newSort = searchParams.get("sort") ?? ''
        const newSortNumber = searchParams.get("sortNumber") ?? 1
        const newPriceValue = searchParams.get("priceValue") ?? '[]'
        let minPrice = 0
        let maxPrice = 10000000
        if (JSON.parse(newPriceValue).length !== 0) {
          minPrice = JSON.parse(newPriceValue)[0]
          maxPrice = JSON.parse(newPriceValue)[1]
        }
        const newcheckedBrands = searchParams.get("checkedBrands") ?? '[]'
        const newInformationValues = searchParams.get("informationValues") ?? '{}'
        const newTypeInformation = searchParams.get("typeInformation") ?? '{}'
        
          dispatch(getAllInfo([newType,+newPage,limit,"",newcheckedBrands,+newSortNumber,minPrice,maxPrice,newSort,newInformationValues,newTypeInformation]))
      }, [])
  
  
     useEffect(() => {
      setloaderParams(true)
      if (loaderParams) {
        console.log('%%');
        
        const newType = searchParams.get("type") ??  ""
        const newPage = searchParams.get("page") ?? 1
        const newFilterCatalog = searchParams.get("filterCatalog") ?? ""
        const newSort = searchParams.get("sort") ?? 'date'
        const newSortNumber = searchParams.get("sortNumber") ?? 1
        const newPriceValue = searchParams.get("priceValue") ?? "[]"
        let minPrice = 0
        let maxPrice = 10000000
        if (JSON.parse(newPriceValue).length !== 0) {
          minPrice = JSON.parse(newPriceValue)[0]
          maxPrice = JSON.parse(newPriceValue)[1]
        }
        const newcheckedBrands = searchParams.get("checkedBrands") ?? "[]"
        const newInformationValues = searchParams.get("informationValues") ?? "{}"
        const newTypeInformation = searchParams.get("typeInformation") ?? "{}"
        console.log('dd',  newPage);
        
        
        dispatch( getProducts([newType,+newPage,limit,newFilterCatalog,newcheckedBrands,+newSortNumber,minPrice,maxPrice,newSort,newInformationValues,newTypeInformation]))
      }
          
     }, [searchParams])
     
     
      useEffect(() => {

        setloaderInfo(prev=>prev + 1)
           if (loaderInfo > 1){
            const searchParams = new URLSearchParams(location.search);
            searchParams.set('sort',sort)
            searchParams.set('sortNumber',String(sortNumber))
            searchParams.set('checkedBrands',JSON.stringify(checkedBrands))
            searchParams.set('informationValues',JSON.stringify(informationValues))
            searchParams.set('filterCatalog',JSON.stringify(filterCatalog))
            searchParams.set('priceValue',JSON.stringify(priceValue))
            searchParams.set('typeInformation',JSON.stringify(typeInformation))
            searchParams.set('page', '1');
   
            navigate({
              pathname: location.pathname,
              search: `?${searchParams.toString()}`
            });
           } 
      }, [sort,sortNumber,checkedBrands,informationValues,filterCatalog,priceValue])





      const onPageChange = (event: React.ChangeEvent<unknown>, page: number)=>{
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('page', String(page));
        navigate({
          pathname: location.pathname,
          search: `?${searchParams.toString()}`
        });
      }

      
  return (
    <>
       {productsLoad ?
         <div className="mainCatalog__gridCover">
              <div className="mainCatalog__grid">
            {products.responce?.map((e:any)=>
        <ProductItem
            key={e._id}
            data={e}
            basket={basket}
            loves={loves}
            compare={compare}
            inCompare = {compare?.find((el:any)=>el.product?._id == e._id) ? true : false}
            inBasket = {basket?.find((el:any)=>el.product?._id == e._id)  ? true : false}
            inLoves = {loves?.find((el:any)=>el.product?._id == e._id)  ? true : false}
            className='catalogItem'
        />
            )}
              </div>
              <div className="mainCatalog__pagination">
                 <Pagination page={page}  onChange={onPageChange} count={products?.responceAll ? Math.ceil(products.responceAll.length / limit) : 1} variant="outlined" />
              </div>
         </div>
       :
        <div className="mainCatalog__grid">
          {Array(10).fill(0).map((e:any,i:any)=><Skeleton key={i} variant="rectangular" height={300} animation="wave"/>)}
        </div>
       }
        { gridLoader && <div className="Catalog__gridLoader"><CircularProgress /></div>}
    </>
 
  )
}

