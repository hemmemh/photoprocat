import { makeAutoObservable } from "mobx"

export default class BrandStore{
    _checkedBrands:any


    constructor(){
        this._checkedBrands=[]
        makeAutoObservable(this)
    }

    setCheckedBrands(checkedBrands:any){
        this._checkedBrands = checkedBrands
    }
    
    get checkedBrands(){
        return this._checkedBrands
    }

  

   
}
