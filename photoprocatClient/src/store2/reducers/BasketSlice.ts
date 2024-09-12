
import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import {IBasket, IBasketItem, IProduct} from '../../utils/interfaces'
import dayjs, { Dayjs } from 'dayjs'
    


type initialState = {
    load:boolean,
    sumPrice:number,
    basket:IBasket | null,
  
}

const initialState:initialState = {
    load:false,
    sumPrice:0,
    basket:{
        basketItems:[],
        user:'',
        _id:'',
    },
   

}

export const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers:{
        setLoad(state,action:PayloadAction<boolean>){
            state.load = action.payload
        },
        setSumPrice(state,action:PayloadAction<number>){
            state.sumPrice= action.payload
        }, 
        setBasket(state,action:PayloadAction<IBasket>){
            state.basket= action.payload
        }, 
        setBasketItems(state,action:PayloadAction<IBasketItem[]>){
            if (state.basket) {
                state.basket.basketItems= action.payload
            }
        },

    }


})

export default basketSlice.reducer