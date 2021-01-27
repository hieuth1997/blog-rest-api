import newsService from './news.service';
import BaseResponse from '../commons/helpers/baseResponse';

export default {
  async create(req, res, next) {
    try {
      const newNews = req.body;
      const newsItem = await newsService.create(newNews);
      return new BaseResponse({ statusCode: 201, data: { newsItem } }).return(
        res,
      );
    } catch (error) {
      next(error);
    }
  },
  async find(req, res, next) {
    try {
      const { limit, page, select, sort } = req.query;
      const news = await newsService.find({
        select,
        page,
        limit,
        sort,
        active: true,
      });
      return new BaseResponse({ statusCode: 200, data: { news } }).return(res);
    } catch (error) {
      next(error);
    }
  },
  async adminFind(req, res, next) {
    try {
      const { limit, page, select, sort } = req.query;
      const news = await newsService.find({ select, page, limit, sort });
      return new BaseResponse({ statusCode: 200, data: { news } }).return(res);
    } catch (error) {
      next(error);
    }
  },
  async getBySlug(req, res, next) {
    try {
      const { slug } = req.params;
      const newsItem = await newsService.findBySlug(slug);
      return new BaseResponse({ statusCode: 200, data: { newsItem } }).return(
        res,
      );
    } catch (error) {
      next(error);
    }
  },
  async getById(req, res, next) {
    try {
      const { newsId } = req.params;
      let news = await newsService.findById(newsId);
      return new BaseResponse({ statusCode: 200, data: { news } }).return(res);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { newsId } = req.params;
      let news = await newsService.update(newsId, req.body);
      return new BaseResponse({
        statusCode: 200,
        data: { news },
      }).return(res);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { newsId } = req.params;
      await newsService.remove(newsId);
      return new BaseResponse({ statusCode: 204 }).return(res);
    } catch (error) {
      next(error);
    }
  },
  async upload(req, res, next) {
    try {
      const path = req.file && req.file.path;
      return new BaseResponse({ statusCode: 200, data: { path } }).return(res);
    } catch (error) {
      next(error);
    }
  },
};
