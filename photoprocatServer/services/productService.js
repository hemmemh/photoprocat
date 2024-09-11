
const Product  = require("../models/Product")
const Information  = require("../models/Information")
const uuid = require('uuid')
const path = require('path')
const fs = require('fs')
const Type = require("../models/Type")
const typeService = require("./typeService")
const ApiError = require("../Errors/ApiError")
const { productsData, ratingData } = require("../data/exapleData")
const brandService = require("./brandService")
const { getRandomElement } = require("../helpers/productsHelpers")
const userService = require("./userService")
const ratingService = require("./ratingService")
class productServices{


    async createProduct(name,description,price,information,typeId,brandId,image){
        try {
            const date = Date.now()
            const type = await typeService.getOne(typeId)
            let typeInformations = JSON.parse(information) 
            console.log(type);
            JSON.parse(type.informations).forEach((el)=>{
                typeInformations = typeInformations.filter(fill=>{
                   return  Object.keys(fill)[0] !== Object.keys(el)[0]
                })
            })
            if (typeInformations.length !== 0 || Object.keys(JSON.parse(information)).length < Object.keys(JSON.parse(type.informations)).length) {
                return ApiError .forbidden('неверен email или пароль')
            }
            let imagesPath=[]
              image.forEach(e=>{
                const image = uuid.v4() + '.jpg'
                imagesPath.push(image)
                const filePath = path.resolve(__dirname,'..','static',`${name}`)
                if (!fs.existsSync(filePath)) {
                  fs.mkdirSync(filePath,{recursive:true})
                } 
                e.mv(path.resolve(filePath,image)) 
              })
            const response = new Product({name,description,price,type:typeId,brand:brandId,images:JSON.stringify(imagesPath),date})
            await response.save()
            let arr = []
            for (const e of JSON.parse(information)) {
                const info = new Information({name:Object.entries(e)[0][0],description:Object.entries(e)[0][1]})
                await info.save()
                console.log(info,'info');
                arr.push(info._id)
            }
         
    
            response.information = arr
            await response.save()
            return response
        } catch (e) {
            throw ApiError.BadRequestData()
        }
    }

      async getOne(id){
        try {
        const response =await Product.findById(id).populate(['type','brand','ratings','information']);
        return response
        } catch (error) {
            throw ApiError.unauthorized()
        }
        
    }
    async change(id,purchase){
        try {
            console.log(id,purchase,'+++++++');
        const response =await Product.findById(id)
        response.purchaseNumber = response.purchaseNumber  + Number(purchase)
        await response.save()
        return response
        } catch (error) {
            throw ApiError.BadRequestData()
        }
        
    }
    async getAll(query){
        try {
            let {page,limit,typeId,brandId,search,minPrice,maxPrice,sort,sortNumber,checkedBrands,informations,typeInformation} = query
         
            page = page || 1
            limit = limit || 4
            search = search || ""
            console.log('sse', search.length);
            search = search.length !== 0 ? JSON.parse(search) : search
            checkedBrands = checkedBrands || '[]'
            checkedBrands = JSON.parse(checkedBrands)
            const searchReg = new RegExp('.*' +search+ '.*')
            
            sort = sort || 'date'
            sortNumber = sortNumber || 1 
            minPrice =Number(minPrice)  || 0 
            maxPrice =Number(maxPrice)  || 1000000000
            console.log(minPrice,maxPrice);
            informations = informations || '{}'
            informations = JSON.parse(informations)
            typeInformation = typeInformation || 'null'
            typeInformation = JSON.parse(typeInformation)
            typeId = typeId || ''
            const skip = limit * page - limit 
            let responce
            let count
            console.log('informations', sort);
            const responseForInformations =await Product.find({type:typeId}).populate(['type','brand','ratings','information']);
            responce =await Product.find({name: { $regex: searchReg, $options: "i" },type:typeId, price:{$gt: minPrice-1, $lt: maxPrice+1}}).sort({[sort]:sortNumber}).populate(['type','brand','ratings','information']);
          
            if (sort =='rating') {
                sortNumber == -1 ?
                responce.sort((a,b)=>b.ratings.reduce((sum,val)=>val.rate+sum,0) - a.ratings.reduce((sum,val)=>val.rate+sum,0))
                :
                responce.sort((a,b)=>a.ratings.reduce((sum,val)=>val.rate+sum,0) - b.ratings.reduce((sum,val)=>val.rate+sum,0))
            }
            responce = [...responce.filter(e=>{
               
                return checkedBrands.length == 0 ? e: checkedBrands.includes((e.brand._id).valueOf())

            })]
            if (typeInformation !== null) {
                console.log('typeInformation', typeInformation);
                
                responce = [...responce.filter(e=>{
                    let bool= true
                  for (const it of e.information) {
                         console.log('itt', it.name, typeInformation['Частота кадров']);
                         
                     if (typeInformation[it.name] == 'radio') {
                      
                            if (!Object.entries(informations).find(f=>f[0] === it.name  && f[1] === it.description ) && !Object.entries(informations).find(f=>f[1] === 'неважно')) {
                                bool = false
                            }
                        
                        
                     }
                     if (typeInformation[it.name] == 'check') {
                        console.log('it', it.description);
                        
                         if (!Object.entries(informations).find(f=>f[0] === it.name && f[1].includes(it.description) ) &&  informations[it.name].length !== 0) {
                             bool = false
                         }
                     }
                     if (typeInformation[it.name] == 'slider') {
                         if (!Object.entries(informations).find(f=>f[0] === it.name && Number(it.description) >= Number(f[1][0]) && Number(it.description) <= Number(f[1][1])) ) {
                             bool = false
                         }
                     }
                    
                  }
                     
                    
                     return  bool
     
                 })]
            }
            count = responce.length
            const responceAll = responce
            responce = responceAll.slice(skip,limit * page)
            const type = await typeService.getOne(typeId)
            return ({
                responseForInformations,
                responce,
                responceAll,
                type,
                count
            })
        } catch (e) {
            console.log('err', e);
            
            throw ApiError.internal('')
        }
      }

      async getByPurchase(){
        try {
            let response =await Product.find({}).sort({purchaseNumber:-1}).populate(['type','brand','ratings','information']).limit(5)
         
        return response
        } catch (error) {
            throw ApiError.internal('')
        }
        
    }

    async createMany(){
       try {
        const products = productsData
        const brands = await brandService.getAll()
        const users = await userService.getAll()
        const rates = ratingData
        for (const product of products){
            const {name, price, description, information, typeName, imagesPath} = product
            const date = Date.now()
            const type = await typeService.getOneByName(typeName)
            const brand = getRandomElement(brands)
            const response = new Product({name,description,price,type:type.id,brand:brand.id,images:JSON.stringify(imagesPath),date})
            await response.save()
            let arr = []
            for (const e of JSON.parse(information)) {
                const info = new Information({name:Object.entries(e)[0][0],description:Object.entries(e)[0][1]})
                await info.save()
                arr.push(info._id)
            }
     


            response.information = arr
            await response.save()
            for (const user of users){
                const rateData = getRandomElement(rates)
                 await ratingService.createRating(user.id,rateData.rate,response.id,rateData.name, rateData.sername, rateData.text)

            }
        }
       } catch (error) {
        console.log('err', error);
        
        throw ApiError.BadRequestData()
       }

    }

}
module.exports =new productServices()

