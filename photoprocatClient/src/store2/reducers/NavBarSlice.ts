
import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import {IProduct} from '../../utils/interfaces'


type initialState = {
basket:number
loves:number
compare:number
products:number
menu:boolean
menuIconRef:any
search:boolean
filter:string
filterCatalog:string
loginModal:boolean
loader:boolean
passSucc:boolean
validationError:boolean
validationErrorText:string[]
modalStage:number
}
const initialState:initialState = {

    basket:0,
    loves:0,
    compare:0,
    products:0,
    menu:false,
    menuIconRef:null,
    search:false,
    filter:'',
    filterCatalog:"",
    loginModal:false,
    loader:false,
    passSucc:false,
    validationError:false,
    validationErrorText:[],
    modalStage:1
    
}

export const navbarSlice = createSlice({
    name:'navbar',
    initialState,
    reducers:{
        setBasket(state,action:PayloadAction<number>){
            state.basket = action.payload
        },
        setLoves(state,action:PayloadAction<number>){
            state.loves = action.payload
        },
        setCompare(state,action:PayloadAction<number>){
            state.compare = action.payload
        },
        setProducts(state,action:PayloadAction<number>){
            state.products= action.payload
        },
        setMenu(state,action:PayloadAction<boolean>){
            state.menu= action.payload
        },
        setMenuIconRef(state,action:PayloadAction<any>){
            state.menuIconRef= action.payload
        },
        setSearch(state,action:PayloadAction<boolean>){
            state.search= action.payload
        },
        setFilter(state,action:PayloadAction<string>){
            state.filter= action.payload
        },
        setFilterCatalog(state,action:PayloadAction<string>){
            state.filterCatalog = action.payload
        },
        setLoginModal(state,action:PayloadAction<boolean>){
            state.loginModal = action.payload
        },
        setLoader(state,action:PayloadAction<boolean>){
            state.loader = action.payload
        },
        setPassSucc(state,action:PayloadAction<boolean>){
            state.passSucc = action.payload
        },
        setValidationError(state,action:PayloadAction<boolean>){
            state.validationError = action.payload
        },
        setValidationErrorText(state,action:PayloadAction<string[]>){
            state.validationErrorText = action.payload
        },
        setModalStage(state,action:PayloadAction<number>){
            state.modalStage = action.payload
        },

        
    }

})

export default navbarSlice.reducer