import axios from "axios"
import { $authHost, $host } from "."
import { API_URL } from "../utils/config"

export const getBasket= async(info:any)=>{
    const {data} = await $host.post('basket/getOne',info)
    return data
}

export const addItemToBasket= async(info:any)=>{
    const {data} = await $host.post('basket/add',info)
    return data
}
export const removeItemFromBasket= async(info:any)=>{
    const {data} = await $host.post('basket/remove',info)
    return data
}

export const changeAmount= async(info:any)=>{
    const {data} = await $host.post('basket/change',info)
    return data
}

export const addOrder= async(info:any)=>{
    const {data} = await $host.post('order/add',info)
    return data
}

 
export const removeAll= async(info:any)=>{
    const {data} = await $host.post('basket/removeAll',info)
    return data
}
export const getOrder= async(info:any)=>{
    const {data} = await $host.post('order/getAll',info)
    return data
}