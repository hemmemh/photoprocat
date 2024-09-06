import axios from "axios"
import { $authHost, $host } from "."
import { API_URL } from "../utils/config"

export const addItemToCompare= async(info:any)=>{
    const {data} = await $host.post('compare/add',info)
    return data
}

export const getCompare= async(info:any)=>{
    const {data} = await $host.post('compare/getOne',info)
    return data
}

export const removeItemFromCompare= async(info:any)=>{
    const {data} = await $host.post('compare/remove',info)
    return data
}


export const removeItemFromCompareByType= async(info:any)=>{
    const {data} = await $host.post('compare/removeByType',info)
    return data
}