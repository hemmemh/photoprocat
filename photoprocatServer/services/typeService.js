const Type = require('../models/Type');
const ApiError = require('../Errors/ApiError');
const { typeData } = require('../data/exapleData');
class typeServices {
  async createType(name, informations) {
    try {
      const response = new Type({ name, informations });
      await response.save();
      return response;
    } catch (e) {
      console.log('e', e);
      throw ApiError.BadRequestData();
    }
  }
  async getAll() {
    try {
      const response = await Type.find({});
      return response;
    } catch (e) {
      console.log('e', e);
      throw ApiError.internal('');
    }
  }
  async getOne(idType) {
    try {
      const response = await Type.findById(idType);
      return response;
    } catch (error) {
      console.log('e', error);
      throw ApiError.internal('');
    }
  }

  async getOneByName(name) {
    try {
      const response = await Type.findOne({ name });
      return response;
    } catch (error) {
      console.log('e', error);
      throw ApiError.internal('');
    }
  }

  async createMany() {
    try {
      const data = typeData;
      for (const type of data) {
        const response = new Type({
          name: type.name,
          informations: type.informations,
        });
        await response.save();
      }
      const allTypes = await this.getAll();
      return allTypes;
    } catch (error) {
      console.log('e', error);
      throw ApiError.BadRequest('недостаточно данных');
    }
  }
}
module.exports = new typeServices();
