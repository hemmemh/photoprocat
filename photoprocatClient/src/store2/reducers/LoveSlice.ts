
import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { ILoves, ILovesItem } from '../../utils/interfaces'

    


type initialState = {
   load:boolean
   loves:ILoves | null
}

const initialState:initialState = {
load:false,
loves:null
}

export const loveSlice = createSlice({
    name:'love',
    initialState,
    reducers:{
        setLoad(state,action:PayloadAction<boolean>){
            state.load = action.payload
        }, 
        setLoves(state,action:PayloadAction<ILoves>){
            state.loves = action.payload
        }, 
        setLovesItems(state,action:PayloadAction<ILovesItem[]>){
            if (state.loves) {
                state.loves.lovesItems= action.payload
            }
        },
    }

})

export default loveSlice.reducer