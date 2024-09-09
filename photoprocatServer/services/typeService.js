const Type  = require("../models/Type")
const uuid = require('uuid')
const path = require('path')
const fs = require('fs')
const ApiError = require("../Errors/ApiError")
const { typeData } = require("../data/exapleData")
class typeServices{

 
    async createType(name,informations){
        try {
        
            const response = new Type({name,informations})
            await response.save()
            return response
        } catch (e) {
            throw ApiError.BadRequestData()
        }
      }
      async getAll(){
        try {
            const response =await Type.find({})
            return response
        } catch (e) {
            throw ApiError.internal('')
        }
      }
      async getOne(idType){
        try {
        const response =await Type.findById(idType)
        return response
        } catch (error) {
            throw ApiError.internal('')
        }
        
    }

    async getOneByName(name){
        try {
        const response =await Type.findOne({name})
        return response
        } catch (error) {
            throw ApiError.internal('')
        }
        
    }

    async createMany(){
        try {
          const data = typeData
          for (const type of data){
            const response = new Type({name:type.name,informations:type.informations})
            await response.save()
          }
          const allTypes =  await this.getAll()
          return allTypes
        } catch (error) {
          throw ApiError.BadRequest('недостаточно данных')
        }
      }
}
module.exports =new typeServices()