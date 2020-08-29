'use strict'

const NewsModel = require('../models/news');

exports.getNews = async (query, page, limit) => {
  try {
    return await NewsModel.paginate(query, { page, limit });
  } catch (e) {
    throw Error(e);
  }
};