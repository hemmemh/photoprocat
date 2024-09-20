const Brand = require('../models/Brand');
const uuid = require('uuid');
const path = require('path');
const fs = require('fs');
const ApiError = require('../Errors/ApiError');
const { brandData } = require('../data/exapleData');
class brandServices {
  async createBrand(name, image) {
    try {
      const imagePath = uuid.v4() + '.jpg';
      const filePath = path.resolve(__dirname, '..', 'static', `brands`);
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      image.mv(path.resolve(filePath, imagePath));
      const response = new Brand({ name, image: imagePath });
      await response.save();
      return response;
    } catch (e) {
      console.log('e', e);
      throw ApiError.BadRequest('недостаточно данных');
    }
  }
  async getAll() {
    try {
      const response = await Brand.find({});
      return response;
    } catch (e) {
      console.log('e', e);
      throw ApiError.internal('нет брендов');
    }
  }
  async getOne(idType) {
    try {
      const response = await Brand.findById(idType);
      return response;
    } catch (error) {
      console.log('e', error);
      throw ApiError.BadRequest('недостаточно данных');
    }
  }

  async createMany() {
    try {
      const data = brandData;
      for (const brand of data) {
        const response = new Brand({ name: brand.name, image: brand.image });
        await response.save();
      }
      const allBrands = await this.getAll();
      return allBrands;
    } catch (error) {
      console.log('e', error);
      throw ApiError.BadRequest('недостаточно данных');
    }
  }
}
module.exports = new brandServices();
