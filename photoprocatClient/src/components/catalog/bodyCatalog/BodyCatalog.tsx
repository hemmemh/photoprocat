import { LeftCatalog } from "./leftCatalog/LeftCatalog"
import { RightCatalog } from "./rightCatalog/RightCatalog"
import './bodyCatalog.scss'

export const BodyCatalog = () => {
  return (
    <div className="Catalog__main mainCatalog">
        <LeftCatalog/>
        <RightCatalog/>
    </div>
  )
}

