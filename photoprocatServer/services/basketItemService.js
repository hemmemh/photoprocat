const BasketItem  = require("../models/BasketItem")
const Basket  = require("../models/Basket")
const ApiError = require("../Errors/ApiError")

class basketItemServices{
    async createbasketItem(basketId,product,count){
        try {
            const basket =await Basket.findOne({_id:basketId}).populate('basketItems')
            const response = new BasketItem({basket:basketId,product,count})
            
            await response.save()
            basket.basketItems.push(response._id)
            await basket.save()
            const item = await BasketItem.findOne({_id:response._id}).populate('product')
            return item

        } catch (e) {
            throw ApiError.unauthorized()
        }
    }


    async changebasketItem(id,count){
        try {
            const basketItem =await BasketItem.findById(id)
            basketItem.count = count
            await basketItem.save()
            return basketItem
        } catch (e) {
            throw ApiError.unauthorized()
        }
    }
    async deletebasketItem(id,basketId){
      
        try {
            const basket =await Basket.findById(basketId).populate({path:"basketItems",populate:{path:'product'}})
            const item = basket.basketItems.find(el=>el._id.toString() === id)
            basket.basketItems = basket.basketItems.filter(el=>el._id.toString()  !== id)
     
            console.log();
            
            if(!item) return
            await BasketItem.findOneAndRemove({product:id})
            await basket.save()
            return item
        } catch (e) {
            throw ApiError.unauthorized()
        }
    }
}
module.exports =new basketItemServices()