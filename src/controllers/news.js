'use strict'

const querystring = require('querystring');
const NewsService = require('../services/news');

exports.getNews = async (req, res, next) => {
  try {
    const page = req.query.page ? req.query.page: 1;
    const limit = req.query.limit ? req.query.limit : 100;
    const filters = req.query.filters ? req.query.filters : {};
    const news = await NewsService.getNews(filters, page, limit);

    return res.status(200).json({ status: 200, data: news });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getNewById = async (req, res, next) => {
  try {
    const news = await NewsService.getNewById(req.params.id);
    console.log(news);
    return res.status(200).json({ status: 200, data: news });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.createNew = async (req, res, next) => {
  try {
    const news = await NewsService.createNew(req.body);
    console.log(news);
    return res.status(200).json({ status: 200, data: news });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.updateNew = async (req, res, next) => {
  try {
    const news = await NewsService.updateNew(req.params.id, req.body);
    console.log(news);
    return res.status(200).json({ status: 200, data: news });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.deleteNew = async (req, res) => {
  try {
    const news = await NewsService.deleteNew(req.params.id);
    console.log(news);
    return res.status(200).json({ status: 200, data: news });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};