const Information = require('../models/Information');
class informationServices {
  async createInformation(name, description, productId) {
    try {
      const response = new Information({
        name,
        description,
        product: productId,
      });
      await response.save();
      return response;
    } catch (e) {
      console.log('e', e);
      throw ApiError.unauthorized();
    }
  }
  async getAll() {
    try {
      const response = await Type.find({});
      return response;
    } catch (e) {
      console.log('e', e);
      throw ApiError.unauthorized();
    }
  }
  async getOne(idType) {
    try {
      const response = await Type.findById(idType);
      return response;
    } catch (error) {
      console.log('e', error);
      throw ApiError.unauthorized();
    }
  }
}
module.exports = new informationServices();
