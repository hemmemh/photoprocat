import axios from "axios"
import { $authHost, $host } from "."
import { API_URL } from "../utils/config"

export const getLoves =  async(info:any)=>{
    const {data} = await $host.post('loves/getOne',info)
    return data
}

export const addProductInLoves =  async(info:any)=>{
    const {data} = await $host.post('loves/add',info)
    return data
}


export const removeProductFromLoves =  async(info:any)=>{
    const {data} = await $host.post('loves/remove',info)
    return data
}