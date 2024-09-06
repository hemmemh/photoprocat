
import { useParams } from 'react-router-dom'
import { addToCompare, addToLoves } from '../../../../../../../store2/actions/ProductActions'
import { useAppDispatch, useAppSelector } from '../../../../../../../hooks/reduxHooks'
import { catalogSlice } from '../../../../../../../store2/reducers/CatalogSlice'
import {ReactComponent as CompareSvg} from '../../../../../../../images/compare.svg'
import {ReactComponent as StarSvg} from '../../../../../../../images/star.svg'

import Loader from '../../../../../../UI/loader/Loader'
const ActionsGallery = () => {

    const {inCompare,inLoves,loaders} = useAppSelector((state)=>state.reducer.product)

    const dispatch = useAppDispatch()
    const {id} = useParams()


  return (
    <div className="gallery-product__actions">
             {loaders.compare ?
                                <CompareSvg onClick={()=>dispatch(addToCompare(id)) } className={inCompare ? "gallery-product__action active" : "gallery-product__action"}/>:
                                <Loader />}
                             {loaders.love ?
                              <StarSvg onClick={()=>dispatch(addToLoves(id))} className={inLoves ? "gallery-product__action active" : "gallery-product__action"}/>
                            :
                            <Loader/>
                            }
       
    </div>
  )
}

export default ActionsGallery