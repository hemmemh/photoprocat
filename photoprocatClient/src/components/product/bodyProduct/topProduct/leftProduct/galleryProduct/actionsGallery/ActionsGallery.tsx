
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../../../../hooks/reduxHooks'
import {ReactComponent as CompareSvg} from '../../../../../../../images/compare.svg'
import {ReactComponent as StarSvg} from '../../../../../../../images/star.svg'

import Loader from '../../../../../../UI/loader/Loader'
import useItemProduct from '../../../../../../../hooks/useItemProduct'
import { addToCompareAction } from '../../../../../../../store2/actions/CompareActions'
const ActionsGallery = () => {

    const {inCompare,inLoves,inBasket,loaders, product} = useAppSelector((state)=>state.reducer.product)
    const {addToLoves}= useItemProduct({inBasket,inCompare, inLoves, data:product})

    const dispatch = useAppDispatch()
    const {id} = useParams()


  return (
    <div className="gallery-product__actions">
             {loaders.compare ?
                                <CompareSvg onClick={()=>dispatch(addToCompareAction(id)) } className={inCompare ? "gallery-product__action active" : "gallery-product__action"}/>:
                                <Loader />}
                             {loaders.love ?
                              <StarSvg onClick={addToLoves} className={inLoves ? "gallery-product__action active" : "gallery-product__action"}/>
                            :
                            <Loader/>
                            }
       
    </div>
  )
}

export default ActionsGallery