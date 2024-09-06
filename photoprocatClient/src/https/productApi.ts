import { $host } from "."

export const getAllproduct = async(typeId:any=null,page:any=null,limit:any=null,search:any=null,checkedBrands:any=null,sortNumber:any=null,minPrice:any=null,maxPrice:any=null,sort:any=null,informations:any=null,typeInformation:any=null)=>{
   console.log(typeId,'qqqqqqqq');
    const {data} = await $host.get('product/getAll',{params:{
        typeId,page,limit,search,checkedBrands,sortNumber,minPrice,maxPrice,sort,informations,typeInformation
        
    }})
    return data
}


export const getOneproduct = async(id:any)=>{
    const {data} = await $host.post('product/getOne',id)
    return data
}

export const createProduct = async(id:any)=>{
    const {data} = await $host.post('product',id)
    return data
}



export const addOrderItem = async(info:any)=>{
    const {data} = await $host.post('orderItem',info)
    return data
}

export const addRaiting= async(info:any)=>{
    const {data} = await $host.post('rating',info)
    return data
}


export const change= async(info:any)=>{
    const {data} = await $host.post('product/change',info)
    return data
}

export const getByPurchase= async()=>{
    const {data} = await $host.post('product/getByPurchase')
    return data
}

