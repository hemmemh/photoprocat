import { useAppDispatch } from "../../../../hooks/reduxHooks"
import { addProduct } from "../../../../store2/actions/ProductActions"
import Button from "../../../UI/button/Button"
import Button2 from "../../../UI/button2/Button2"
import { ImagesProduct } from "./imagesProduct/ImagesProduct"
import { ProductInputs } from "./productInputs.tsx/ProductInputs"
import { SpoilersProduct } from "./spoilersProduct/SpoilersProduct"


export const ProductModal = () => {
    const dispatch = useAppDispatch()

  return (
    <div className="adminModalProduct">
        <ProductInputs/>
        <SpoilersProduct/>
        <ImagesProduct/>
        <Button2 onClick={()=>dispatch(addProduct())} className='buttonCart'>Создать</Button2>
     </div>
  )
}

