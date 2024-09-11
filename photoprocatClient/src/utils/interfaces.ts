export interface IProduct{
    brand:IBrand
    date?:string
    description?:string
    images:string
    information:Array<IInformation>
    name?:string
    price:number
    purchaseNumber?:number
    ratings:Array<IRating>
    type:IType
    _id:string
  
  }
  
  export interface IBrand {
    image?:string
    name?:string
    products?:[]
    _id?:string
  }

  export interface IOrderItem {
    date:string
    number:number
    orders:string
    ordersItemProduct:IOrdersItemProduct[]
    price:number
    _id:string
  }
  
  export interface IOrdersItemProduct{
    amount:number
    orderItem:string
    product:IProduct
    _id:string

  }

  export interface IProducts {
    count?:number
    responce:Array<IProduct>
    responseForInformations:Array<IProduct>
    type:IType | null
    responceAll:Array<IProduct>
  }

  export interface IBasket {
    basketItems:Array<IBasketItem>
    user?:string
    _id?:string
  }




  export interface IInformation {
    descriptio:string
    name:string
    _id:string
  }
  
  export  interface IRating {
    name:string
    rate:number
    sername:string
    text:string
    user:string
    _id:string
  }
  
  export  interface IType {
    name:string
    informations:string
    products:[]
    _id:string
  }
  
  export  interface IBasketItem{
    basket:string
    count:number
    product:IProduct
    _id:string
  }
  
  export interface ICompareItem{
    compare:string
    product:IProduct
    _id:string
  }
  
  export interface ILovesItem{
    loves:string
    product:IProduct
    _id:string
  }
  