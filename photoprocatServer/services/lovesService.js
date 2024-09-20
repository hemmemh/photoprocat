const ApiError = require('../Errors/ApiError');
const Loves = require('../models/Loves');

class lovesServices {
  async createLoves(id) {
    try {
      const response = new Loves({ user: id });
      await response.save();
      return response;
    } catch (e) {
      console.log('e', e);
      throw ApiError.internal();
    }
  }

  async getOne(id) {
    try {
      const loves = await Loves.findById(id).populate({
        path: 'lovesItems',
        populate: { path: 'product', populate: ['type', 'brand', 'ratings'] },
      });
      return loves;
    } catch (error) {
      console.log('e', error);
      throw ApiError.unauthorized();
    }
  }
}
module.exports = new lovesServices();
