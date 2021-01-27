import Joi from '@hapi/joi';

export const get = {
  query: {
    limit: Joi.number().min(1).max(100),
    page: Joi.number().min(1),
    select: Joi.string(),
    sort: Joi.string(),
  },
};

export const getBySlug = {
  params: {
    slug: Joi.string().required(),
  },
};

export const getById = {
  params: {
    newsId: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/, { name: 'object id' })
      .required(),
  },
};

export const createNews = {
  body: {
    name: Joi.string().min(10).max(250).required(),
    title: Joi.string().required(),
    picture: Joi.string(),
    metaKeyword: Joi.string().required(),
    metaDescription: Joi.string().required(),
    content: Joi.string().min(50).required(),
  },
};

export const updateNews = {
  params: {
    newsId: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/, { name: 'object id' })
      .required(),
  },
  body: {
    name: Joi.string().min(10).max(250),
    title: Joi.string(),
    metaKeyword: Joi.string(),
    picture: Joi.string(),
    metaDescription: Joi.string(),
    content: Joi.string().min(50),
    active: Joi.bool(),
  },
};

export const remove = {
  params: {
    newsId: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/, { name: 'object id' })
      .required(),
  },
};
