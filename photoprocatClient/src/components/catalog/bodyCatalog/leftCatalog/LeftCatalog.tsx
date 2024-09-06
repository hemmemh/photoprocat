import { FilterMobile } from "./filterMobile/FilterMobile"
import { GridCatalog } from "./gridCatalog/GridCatalog"
import { SortCatalog } from "./sortCatalog/SortCatalog"


export const LeftCatalog = () => {
  return (
    <div className="mainCatalog__left">
    <SortCatalog/>
    <FilterMobile/>
    <GridCatalog/>
    </div>
  )
}

