import { makeAutoObservable } from "mobx"

export default class UserStore{
    _user:any
    _basket:any
    _basketCount:any
    constructor(){
        this._user={}
        this._basket={}
        this._basketCount=0
       
        makeAutoObservable(this)
    }

    setuser(user:any){
        this._user = user
    }
   

   
    
    get user(){
        return this._user
    }

   
}
