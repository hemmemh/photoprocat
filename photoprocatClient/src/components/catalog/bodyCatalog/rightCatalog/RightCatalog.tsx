import PriceSort from "../../../priceSort/PriceSort"
import { FiltrsCatalog } from "./fitrsCatalog/FiltrsCatalog"
import './rightCatalog.scss'


export const RightCatalog = () => {
  return (
    <div className="mainCatalog__right right-main-catalog">
        <FiltrsCatalog/>
        <PriceSort/>
    </div>
  )
}

