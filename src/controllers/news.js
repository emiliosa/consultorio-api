'use strict'

const querystring = require('querystring');
const NewsService = require('../services/news');

exports.getNews = async (req, res, next) => {
  try {
    const page = req.query.page ? req.query.page: 1;
    const limit = req.query.limit ? req.query.limit : 10;
    const filters = req.query.filters ? req.query.filters : {};
    const news = await NewsService.getNews(filters, page, limit);

    return res.status(200).json({ status: 200, data: news });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
