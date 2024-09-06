import { $host } from "."

export const getAllBrands= async()=>{
    const {data} = await $host.post('brand/getAll')
    return data
}


export const createBrand= async(info:any)=>{
    const {data} = await $host.post('brand',info)
    return data
}