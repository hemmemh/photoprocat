import { makeAutoObservable } from "mobx"

export default class NavbarStore{
    _products:number
    _compares:number
    _enter:any
   


    constructor(){
   
        this._products=0
        this._compares=0
        this._enter=null
   
        makeAutoObservable(this,{},{autoBind:true})
       
    }

    setProducts(products:any){
        this._products = products
       
        
    }
    setEnter(enter:any){
        this._enter = enter
      
        
    }

    setCompares(compares:any){
        this._compares = compares
    }
    
    get products(){
        return this._products
    }

    get enter(){
        return this._enter
    }

     
    get compares(){
        return this._compares
    }

  

   
}
