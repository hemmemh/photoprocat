import React, { useEffect, useRef, useState } from 'react'
import ProductSpoiler from '../../../../UI/productSpoiler/ProductSpoiler'
import { IBrand, IType } from '../../../../../utils/interfaces'
import Input from '../../../../UI/input/Input'
import { getAllTypes } from '../../../../../https/typesApi'
import { getAllBrands } from '../../../../../https/brandsApi'
import { adminSlice } from '../../../../../store2/reducers/AdminSlice'
import { addtypeInformationProduct, setInformationProductf } from '../../../../../store2/actions/AdminActions'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/reduxHooks'
import Button2 from '../../../../UI/button2/Button2'
import './spoilerProduct.scss'
export  const SpoilersProduct = () => {
    const [brands, setbrands] = useState<Array<IBrand>>([])
    const [types, settypes] = useState<Array<IType>>([])
    const {brand,type,typeInformationProduct} = useAppSelector(state=>state.reducer.admin)
    const {setBrand} = adminSlice.actions
    const dispatch = useAppDispatch()


     useEffect(() => {
        getAllTypes().then(data=> settypes(data))
        getAllBrands().then(data=>setbrands(data))
      }, [])


     const setBrandf = (e:any)=>{
        dispatch(setBrand(e))
     }


  return (
    <>
        <div className="adminModalProduct__spoilers">
     <ProductSpoiler>
         <Button2 className="buttonCart _spoiler">Выбрать тип</Button2>
         {types.map((el:any)=><Button2 onClick={()=>dispatch(addtypeInformationProduct(el))} className="buttonCart _spoiler">{el.name}</Button2>)}
     </ProductSpoiler>
     <ProductSpoiler >
     <Button2 className="buttonCart _spoiler">Выбрать бренд</Button2>
         {brands.map((el:any)=><Button2 onClick={()=>setBrandf(el)} className="buttonCart _spoiler">{el.name}</Button2>)}
     </ProductSpoiler>
    </div>
    <div className="adminModalProduct__typeChoose">
 
        {typeInformationProduct.map((el:any)=>
        
        <div key={Object.keys(el)[0]} className="adminModalProduct__typeChooseItem">
            <div className="adminModalProduct__text">{Object.keys(el)[0]}</div>
            <Input value={Object.values(el)[0]} change={(e:any)=>dispatch(setInformationProductf(e,Object.keys(el)[0]))} inputClass='registration gv' placeholder='имя типа'/>
        </div>
        )}
    </div>
    </>

  )
}

