
import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import type { Swiper as afea }  from 'swiper';
import { IInformation } from '../../utils/interfaces';


type initialState = {
    firstSwiper:afea | null,
    secondSwiper:afea | null
    activeType:string
    fold:boolean
    activeTypeLoad:boolean
    compareTypes:string[]
    informations:IInformation[]
    load:boolean
}

const initialState:initialState = {
 firstSwiper:null,
secondSwiper:null,
activeType:'',
fold:false,
activeTypeLoad:false,
compareTypes:[],
informations:[],
load:true
}

export const compareSlice = createSlice({
    name:'compare',
    initialState,
    reducers:{
        setFirstSwiper(state,action:PayloadAction<any>){
            state.firstSwiper = action.payload
        }, 
        setSecondSwiper(state,action:PayloadAction<any>){
            state.secondSwiper = action.payload
        }, 
        setActiveType(state,action:PayloadAction<string>){
            state.activeType = action.payload
        }, 
        setFold(state,action:PayloadAction<boolean>){
            state.fold = action.payload
        },
        setActiveTypeLoad(state,action:PayloadAction<boolean>){
            state.activeTypeLoad = action.payload
        }, 
        setCompareTypes(state,action:PayloadAction<string[]>){
            state.compareTypes = action.payload
        }, 
        setInformations(state,action:PayloadAction<IInformation[]>){
            state.informations = action.payload
        }, 
        setLoad(state,action:PayloadAction<boolean>){
            state.load = action.payload
        }, 

    }

})

export default compareSlice.reducer