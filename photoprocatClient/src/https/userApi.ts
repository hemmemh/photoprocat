import axios from "axios"
import { $authHost, $host } from "."
import { API_URL } from "../utils/config"

export const registration= async(info:any)=>{
    const {data} = await $host.post('user/registration',info)
    return data
}

export const login= async(info:any)=>{
    const {data} = await $host.post('user/login',info,{withCredentials:true})
    return data
}

export const logout= async()=>{
    const {data} = await $authHost.post('user/logout',{withCredentials:true})
    return data
}

export const activation= async(info:any)=>{
    const {data} = await $host.post('user/activation',info)
    return data
}
export const forgetPassword= async(info:any)=>{
    const {data} = await $host.post('user/forgetPassword',info)
    return data
}


export const forgetPassword2= async(info:any)=>{
    const {data} = await $host.post('user/forgetPassword2',info)
    return data
}

export const refresh= async()=>{
    const {data} = await $host. post(`user/refresh`)

    return data
}

export const getUser= async(info:any)=>{
    const {data} = await $host.post(`user/getOne`,info)
    return data
}

export const getUserData= async(info:any)=>{
    const {data} = await $host.post(`userData/getOne`,info)
    return data
}

export const setUserData= async(info:any)=>{
    const {data} = await $host.post(`userData/change`,info)
    return data
}

export const changeUser= async(info:any)=>{
    const {data} = await $host.post(`user/change`,info)
    return data
}