import { useAppSelector } from "../../../hooks/reduxHooks"
import './findCatalog.scss'

export const FindCatalog = () => {
    const {productsLoad,products} = useAppSelector((state)=>state.reducer.catalog)
  return (
<div className="mainCatalog__count">Найдено <span>{productsLoad && products.count ? products.count : '0'} товара(ов)</span></div>
  )
}

