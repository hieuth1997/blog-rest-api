import findAdv from '../commons/helpers/find-adv';
import newsModel from './news.model';
import mergeObject from '../commons/helpers/merge-object';

export default {
  async find({ select, page, limit, sort, active }) {
    const newss = await findAdv(newsModel, {
      select,
      limit,
      page,
      sort,
      query: mergeObject({ active }),
    });
    return newss;
  },
  async findBySlug(slug) {
    const news = await newsModel.findOne({ slug });
    return news;
  },
  async create(doc) {
    const news = await newsModel.create(doc);
    return news;
  },
  async update(id, doc) {
    const news = await newsModel.findByIdAndUpdate(id, mergeObject(doc), {
      new: true,
      runValidators: true,
    });
    return news;
  },
  async findById(id) {
    const news = await newsModel.findById(id);
    if (!news) {
      throw new BaseError({ statusCode: 404, error: 'Not found!!!' });
    }
    return news;
  },
  async remove(id) {
    const news = await newsModel.findByIdAndDelete(id);
    return news;
  },
};
