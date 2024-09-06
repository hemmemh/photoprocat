
import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import {IBasket, IBasketItem, IProduct} from '../../utils/interfaces'
import dayjs, { Dayjs } from 'dayjs'
    


type initialState = {
    modal:boolean
    newsId:string
    modalCooment:boolean
    modalNews:boolean
}

const initialState:initialState = {
    modal:false,
    newsId:'',
    modalCooment:false,
    modalNews:false,
}

export const newsSlice = createSlice({
    name:'news',
    initialState,
    reducers:{
        setModal(state,action:PayloadAction<boolean>){
            state.modal = action.payload
        }, 
        setNewsId(state,action:PayloadAction<string>){
            state.newsId = action.payload
        }, 
        setModalCooment(state,action:PayloadAction<boolean>){
            state.modalCooment = action.payload
        }, 
        setModalNews(state,action:PayloadAction<boolean>){
            state.modalNews = action.payload
        }, 

    }

})

export default newsSlice.reducer