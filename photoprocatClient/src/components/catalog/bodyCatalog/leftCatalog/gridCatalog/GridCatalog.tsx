import { useInView } from "react-intersection-observer";

import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { CircularProgress, Skeleton } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/reduxHooks";
import { getAllInfo, getProducts, updateProducts } from "../../../../../store2/actions/ProductActions";
import ProductItem from "../../../../productItem/ProductItem";


export const GridCatalog = () => {
 

      const { ref, inView, entry } = useInView({
        threshold: 0,
      });
      const {priceValue,checkedBrands,sort,sortNumber,typeInformation,informationValues,limit,productsLoad,products,basket,loves,compare,gridLoader,page} = useAppSelector((state)=>state.reducer.catalog)
      const {filterCatalog} = useAppSelector((state)=>state.reducer.navbar)
      const dispatch = useAppDispatch()
      const [searchParams] = useSearchParams();
      const [loaderParams, setloaderParams] = useState(false)
      const [loaderInfo, setloaderInfo] = useState(false)

  
      useEffect(() => {
          dispatch(getAllInfo(searchParams.get("type")))
      }, [])
  
  
     useEffect(() => {
      setloaderParams(true)
      if (loaderParams) {
        console.log('z1'); 
        dispatch(getAllInfo(searchParams.get("type")))
      }
          
     }, [searchParams])
     
     
      useEffect(() => {
     
        setloaderInfo(true)
           if (loaderInfo){
            console.log('z2'); 
         
            dispatch(getProducts([searchParams.get("type"),1,limit,filterCatalog,checkedBrands,sortNumber,Array.isArray(priceValue) && priceValue[0],Array.isArray(priceValue) && priceValue[1],sort,informationValues,typeInformation]))
           } 
      }, [sort,sortNumber,checkedBrands,informationValues,filterCatalog,priceValue])



      useEffect(() => {
        console.log('z3');
        
            if ( inView &&  products.responce?.length < products.responceAll?.length) {
              console.log(products,'kks');
              dispatch( updateProducts([ searchParams.get("type"),page+1,limit,'',checkedBrands,sortNumber,Array.isArray(priceValue) && priceValue[0],Array.isArray(priceValue) && priceValue[1],sort,informationValues,typeInformation]))
            }
      }, [inView])

      
  return (
    <>
       {productsLoad ?
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
            <div  ref={ref} className="mainCatalog__gridEnd"></div>
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

