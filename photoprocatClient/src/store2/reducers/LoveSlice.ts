
import { createSlice,PayloadAction } from '@reduxjs/toolkit'

    


type initialState = {
   load:boolean
}

const initialState:initialState = {
load:true
}

export const loveSlice = createSlice({
    name:'love',
    initialState,
    reducers:{
        setLoad(state,action:PayloadAction<boolean>){
            state.load = action.payload
        }, 
    }

})

export default loveSlice.reducer