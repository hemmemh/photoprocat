const News = require('../models/News');
const Comment = require('../models/Comment');
const uuid = require('uuid');
const path = require('path');
const fs = require('fs');
const ApiError = require('../Errors/ApiError');
const { newsData, commentsData } = require('../data/exapleData');
const userService = require('./userService');
const { getRandomElement } = require('../helpers/productsHelpers');
class newsServices {
  async createNews(title, text, image) {
    try {
      const date = Date.now();
      const imagePath = uuid.v4() + '.jpg';
      const filePath = path.resolve(__dirname, '..', 'static', `news`);
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      image.mv(path.resolve(filePath, imagePath));
      const response = new News({ title, text, image: imagePath, date });
      await response.save();
      return response;
    } catch (e) {
      console.log('e', e);
      throw ApiError.BadRequest('недостаточно данных');
    }
  }


  async createMany() {
    try {
      const users = await userService.getAll();
      const news = newsData
      const comments = commentsData
      for(const newsItem of news){
        const date = Date.now();
        const {text, image, title} = newsItem
        const response = new News({ title, text, image, date });
        await response.save();
        for (const user of users) {
          const comment = getRandomElement(comments);
          await this.addComment(
            user.name,
            user.sername,
            comment.text,
            response
          );
        }
      }
      return []
    } catch (e) {
      console.log('e', e);
      throw ApiError.BadRequest('недостаточно данных');
    }
  }
  async addComment(name, sername, text, news) {
    try {
      const response = new Comment({ name, sername, text });
      const newsRes = await News.findById(news);
      await response.save();
      newsRes.comments.push(response._id);
      await newsRes.save();
      return response;
    } catch (e) {
      console.log('e', e);
      throw ApiError.BadRequestData();
    }
  }

  async getNews() {
    try {
      const response = News.find({}).populate('comments');
      return response;
    } catch (e) {
      console.log('e', e);
      throw ApiError.internal('');
    }
  }
}
module.exports = new newsServices();
