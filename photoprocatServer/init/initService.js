const brandService = require('../services/brandService');
const newsService = require('../services/newsService');
const productService = require('../services/productService');
const typeService = require('../services/typeService');
const userService = require('../services/userService');

class initServices {
  async initDatabase(){
   await brandService.createMany()
   await typeService.createMany()
   await newsService.createMany()
   await userService.createMany()
   await productService.createMany()

   }
}
module.exports = new initServices();
