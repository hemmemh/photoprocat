import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './reduxHooks'
import { navbarSlice } from '../store2/reducers/NavBarSlice'
import { addItemToBasket, removeItemFromBasket } from '../https/basketApi'
import { addItemToCompare, removeItemFromCompare } from '../https/compareApi'
import { addProductInLoves, removeProductFromLoves } from '../https/lovesApi'
import { addToCompareAction, removeFromCompare } from '../store2/actions/CompareActions'
import { addToLovesAction, removeFromLoves } from '../store2/actions/LovesActions'
import { addToBasketAction, removeFromBasket } from '../store2/actions/BasketActions'


type itemProduct = {

    inBasket:boolean
    inCompare:boolean
    inLoves:boolean
    data:any
}

const useItemProduct = ({inBasket,inCompare,inLoves,data}:itemProduct) => {
const [inBasketSnippet, setinBasketSnippet] = useState(inBasket)
const [inCompareSnippet, setinCompareSnippet] = useState(inCompare)
const [inLovesSnippet, setinLovesSnippet] = useState(inLoves)
const [loaders, setloaders] = useState({basket:true,compare:true,love:true})
const {user} = useAppSelector(state=>state.reducer.user)
const {products,compare} = useAppSelector(state=>state.reducer.navbar)
const navbar = navbarSlice.actions
const dispatch = useAppDispatch()

  useEffect(() => {
    setinBasketSnippet(inBasket)
  }, [inBasket])


  useEffect(() => {
    setinCompareSnippet(inCompare)
  }, [inCompare])

  
  useEffect(() => {
    setinLovesSnippet(inLoves)
  }, [inLoves])



  const addToBasket =  async ()=>{
    const item  = document.querySelector('.actionsMenu__span._product')
    const element = document.querySelector('.Navbar__loader')
    if (!user.id) {
      if (!element?.classList.contains('active')) {
        element?.classList.add('active')
        setTimeout(() => {
            element?.classList.remove('active')
        }, 1000);
      }
      return
    }
    if (loaders.basket) {
      if (!inBasketSnippet) {
 

        item?.classList.add('active')
        setTimeout(() => {
          item?.classList.remove('active')
        }, 300);

         await dispatch(addToBasketAction(data._id))
         setinBasketSnippet(true)

      
         
         
      }else{
        item?.classList.add('active')
        setTimeout(() => {
          item?.classList.remove('active')
        }, 300);

          await dispatch(removeFromBasket(data._id))
          setinBasketSnippet(false)  
    }
    }

  
   
}


const addToCompare = async ()=>{
  const item  = document.querySelector('._compare')
    const element = document.querySelector('.Navbar__loader')
  if (!user.id) {
    if (!element?.classList.contains('active')) {
      element?.classList.add('active')
      setTimeout(() => {
          element?.classList.remove('active')
      }, 1000);
    }
    return
  }

  if (loaders.compare) {
    if (!inCompareSnippet) {
      setloaders({...loaders,compare:false})
      await dispatch(addToCompareAction(data._id))
   
    
        setinCompareSnippet(true)
 
        item?.classList.add('active')
        setTimeout(() => {
          item?.classList.remove('active')
        }, 300);
    
        setloaders({...loaders,compare:true})
    }else{
      setloaders({...loaders,compare:false})

      await dispatch(removeFromCompare(data._id))
 

      setinCompareSnippet(false)

      item?.classList.add('active')
      setTimeout(() => {
        item?.classList.remove('active')
      }, 300);

      setloaders({...loaders,compare:true})
  }

  }


}

const addToLoves = async ()=>{
    const element = document.querySelector('.Navbar__loader')
  if (!user.id) {

    if (!element?.classList.contains('active')) {
      element?.classList.add('active')
      setTimeout(() => {
          element?.classList.remove('active')
      }, 1000);
    }
    return
  }

  if (loaders.love) {
    if (!inLovesSnippet) {
      setloaders({...loaders,love:false})
      await dispatch(addToLovesAction(data._id))
      setinLovesSnippet(true)
      setloaders({...loaders,love:true})
  }else{
      setloaders({...loaders,love:false})
      dispatch(removeFromLoves(data._id))
      setinLovesSnippet(false)
      setloaders({...loaders,love:true})
  }
  }

}


  return {addToBasket,addToCompare,addToLoves,inBasketSnippet,inCompareSnippet,inLovesSnippet,loaders}
}

export default useItemProduct