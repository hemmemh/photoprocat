
import { createSlice,PayloadAction } from '@reduxjs/toolkit'

    


type initialState = {
    modal:boolean
    modalSection:number
    name:string
    description:string
    price:string
    type:any
    brand:any
    files:any[]
    fileImages:any[]
    typeInformationProduct:any[]
    sliders:any[]
}

const initialState:initialState = {
    modal:false,
    modalSection:1,
    name:'',
    description:'',
    price:'',
    type:{},
    brand:{},
    files:[],
    fileImages:[],
    typeInformationProduct:[],
    sliders:[]

}

export const adminSlice = createSlice({
    name:'admin',
    initialState,
    reducers:{
        setModal(state,action:PayloadAction<boolean>){
            state.modal = action.payload
        }, 
        setModalSection(state,action:PayloadAction<number>){
            state.modalSection = action.payload
        }, 
        setName(state,action:PayloadAction<string>){
            state.name= action.payload
        }, 
        setDescription(state,action:PayloadAction<string>){
            state.description = action.payload
        }, 
        setPrice(state,action:PayloadAction<string>){
            state.price = action.payload
        }, 
        setType(state,action:PayloadAction<any>){
            state.type = action.payload
        }, 
        setBrand(state,action:PayloadAction<any>){
            state.brand = action.payload
        }, 
        setFiles(state,action:PayloadAction<any>){
            state.files = action.payload
        }, 
        setFileImages(state,action:PayloadAction<any>){
            state.fileImages = action.payload
        }, 
        setTypeInformationProduct(state,action:PayloadAction<any>){
            state.typeInformationProduct = action.payload
        }, 
        setSliders(state,action:PayloadAction<any[]>){
            state.sliders = action.payload
        }, 


    }

})

export default adminSlice.reducer