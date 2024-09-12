
import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { IBasket, IBasketItem, IBrand, ICompareItem, ILovesItem, IOrderItem, IProducts, IType } from '../../utils/interfaces'


type initialState = {
    typeInformation:{},
    informations:any[],
    informationValues:any,
    sliderMouseOn:any,
    priceRange:any,
    priceValue:number | number[]
    minMaxPrice:number[],
    productsLoad:boolean,
    products:IProducts,
    orders:IOrderItem[],
    gridLoader:boolean,
    sortNumber:number,
    sort:string,
    type:IType | null,
    brandsLoad:boolean,
    brands:IBrand[],
    checkedBrands:any[],
    page:number,
    limit:number,

 
    types:IType[]


}
const initialState:initialState = {
    typeInformation:{},
    informations:[],
    informationValues:{},
    sliderMouseOn:{},
    priceRange:[0,10],
    minMaxPrice:[0,100],
    productsLoad:false,
    products:{
        count:0,
        responce:[],
        responceAll:[],
        responseForInformations:[],
        type:null
    },
    gridLoader:false,
    sortNumber:1,
    sort:'date',
    priceValue:[10,20],
    type:null,
    brandsLoad:false,
    brands:[],
    checkedBrands:[],
    page:1,
    limit:6,
    types:[],
    orders:[],



}

export const catalogSlice = createSlice({
    name:'catalog',
    initialState,
    reducers:{
        setInformationValues(state,action:PayloadAction<{}>){
            state.informationValues = action.payload
        },
        setsliderMouseOn(state,action:PayloadAction<{}>){
            state.sliderMouseOn = action.payload
        },
        setPriceRange(state,action:PayloadAction<number | number[]>){
            state.priceRange = action.payload
        },
        setProductsLoad(state,action:PayloadAction<boolean>){
            state.productsLoad = action.payload
        },
        setGridLoader(state,action:PayloadAction<boolean>){
            state.gridLoader = action.payload
        },
        setSortNumber(state,action:PayloadAction<number>){
            state.sortNumber = action.payload
        },
        setSort(state,action:PayloadAction<string>){
            state.sort = action.payload
        },
        setPriceValue(state,action:PayloadAction<number | number[]>){
            state.priceValue = action.payload
        },
        setType(state,action:PayloadAction<IType>){
            state.type = action.payload
        },
        setBrandsLoad(state,action:PayloadAction<boolean>){
            state.brandsLoad = action.payload
        },
        setBrands(state,action:PayloadAction<IBrand[]>){
            state.brands = action.payload
        },
        setCheckedBrands(state,action:PayloadAction<any[]>){
            state.checkedBrands = action.payload
        },
        setProducts(state,action:PayloadAction<IProducts>){
            state.products = action.payload
        },
        setTypeInformation(state,action:PayloadAction<{}>){
            state.typeInformation = action.payload
        },
        setInformations(state,action:PayloadAction<any[]>){
            state.informations = action.payload
        },
        setPage(state,action:PayloadAction<number>){
            state.page = action.payload
        },
        setMinMaxPrice(state,action:PayloadAction<number[]>){
            state.minMaxPrice = action.payload
        },
        setTypes(state,action:PayloadAction<IType[]>){
            state.types = action.payload
        },
        setOrders(state,action:PayloadAction<IOrderItem[]>){
            state.orders = action.payload
        },

    }

})

export default catalogSlice.reducer