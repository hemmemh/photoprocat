import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './reduxHooks'
import { navbarSlice } from '../store2/reducers/NavBarSlice'
import { addItemToBasket, removeItemFromBasket } from '../https/basketApi'
import { addItemToCompare, removeItemFromCompare } from '../https/compareApi'
import { addProductInLoves, removeProductFromLoves } from '../https/lovesApi'


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
const {user} = useAppSelector(state=>state.reducer.catalog)
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



  const addToBasket =  ()=>{
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
        setloaders({...loaders,basket:false})
          addItemToBasket({basketId:user.basket,product:data._id,count:1}).then(data=>{
            item?.classList.add('active')
            setTimeout(() => {
              item?.classList.remove('active')
            }, 300);
            setinBasketSnippet(true)
            dispatch(navbar.setProducts(products + 1))
      
         
          }).finally(()=>{
            setloaders({...loaders,basket:true})
          })
      }else{
        setloaders({...loaders,basket:false})
        removeItemFromBasket({id:data._id,basketId:user.basket}).then(data=>{
          item?.classList.add('active')
          setTimeout(() => {
            item?.classList.remove('active')
          }, 300);
            dispatch(navbar.setProducts(products - 1))
            setinBasketSnippet(false)
        }).finally(()=>{
          setloaders({...loaders,basket:true})
        })  
    }
    }

  
   
}


const addToCompare = ()=>{
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
        addItemToCompare({compareId:user.compare,product:data._id}).then(data=>{
          setinCompareSnippet(true)
          dispatch(navbar.setCompare(compare + 1))
          item?.classList.add('active')
          setTimeout(() => {
            item?.classList.remove('active')
          }, 300);
      
          setinCompareSnippet(true)
        }).catch(e=>{
          console.log(e);
          
        }).finally(()=>{
          setloaders({...loaders,compare:true})
        })
    }else{
      setloaders({...loaders,compare:false})
      removeItemFromCompare({id:data._id,compareId:user.compare}).then(data=>{
        dispatch(navbar.setCompare(compare - 1))
        setinCompareSnippet(false)
        item?.classList.add('active')
        setTimeout(() => {
          item?.classList.remove('active')
        }, 300);
      }).finally(()=>{
        setloaders({...loaders,compare:true})
      })
  }

  }


}

const addToLoves = ()=>{
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
    addProductInLoves({lovesId:user.loves,product:data._id}).then(data=>{
    
      setinLovesSnippet(true)
        
    }).catch(error=>{
      console.log(error.response.data);
      
    }).finally(()=>{
      setloaders({...loaders,love:true})
    })
  }else{
    setloaders({...loaders,love:false})
    removeProductFromLoves({id:data._id,lovesId:user.loves}).then(data=>{
  
        setinLovesSnippet(false)
        
    }).finally(()=>{
      setloaders({...loaders,love:true})
    })
  }
  }

}


  return {addToBasket,addToCompare,addToLoves,inBasketSnippet,inCompareSnippet,inLovesSnippet,loaders}
}

export default useItemProduct