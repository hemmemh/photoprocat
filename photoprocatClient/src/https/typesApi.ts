import { $host } from "."

export const getAllTypes= async()=>{
    const {data} = await $host.post('type/getAll')
    return data
}

export const createType= async(info:any)=>{
    const {data} = await $host.post('type',info)
    return data
}

