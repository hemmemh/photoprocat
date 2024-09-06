
import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import {IProduct} from '../../utils/interfaces'


type initialState = {
    product:IProduct | null
    productLoad:boolean
    inBasket:boolean
    inCompare:boolean
    inLoves:boolean
    raiting:number
    modal:boolean,
    ref:any
    loaders:{
        basket:boolean,
        compare:boolean,
        love:boolean,
    }
}
const initialState:initialState = {
    product:null,
    productLoad:false,
    inBasket:false,
    inCompare:false,
    inLoves:false,
    raiting:1,
    modal:false,
    ref:null,
    loaders:{
        basket:true,
        compare:true,
        love:true,
    }

}

export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        setProduct(state,action:PayloadAction<IProduct | null>){
            state.product = action.payload
        },
        setProductLoad(state,action:PayloadAction<boolean>){
            state.productLoad = action.payload
        },
        setInBasket(state,action:PayloadAction<boolean>){
            state.inBasket = action.payload
        },
        setInCompare(state,action:PayloadAction<boolean>){
            state.inCompare = action.payload
        },
        setInLoves(state,action:PayloadAction<boolean>){
            state.inLoves = action.payload
        },
        setRaiting(state,action:PayloadAction<number>){
            state.raiting = action.payload
        },
        setModal(state,action:PayloadAction<boolean>){
            state.modal = action.payload
        },
        setLoaders(state,action:PayloadAction<any>){
            state.loaders = action.payload
        },
        setRef(state,action:PayloadAction<any>){
            state.ref = action.payload
        },
        
    }

})

export default productSlice.reducer