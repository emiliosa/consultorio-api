'use strict'

const NewsModel = require('../models/news');

exports.getNews = async (query, page, limit) => {
  try {
    return await NewsModel.paginate(query, { page, limit });
  } catch (e) {
    throw Error(e);
  }
};

exports.getNewById = async (id) => {
  try {
    return await NewsModel.findOne({ _id: id });
  } catch (e) {
    throw Error(e);
  };
};

exports.createNew = async (attributes) => {
  try {
    console.log(attributes);

    const { titulo, header, extracto, url } = attributes;

    return await NewsModel.create({
      titulo: titulo,
      header: header,
      extracto: extracto,
      url: url
    });
  } catch (e) {
    throw Error(e);
  }
};

exports.updateNew = async (id, attributes) => {
  try {
    console.log(id, attributes);

    let query = {};
    const { titulo, header, extracto, url } = attributes;

    if (titulo) {
      query = { titulo };
    }

    if (header) {
      query = { header, ...query };
    }

    if (extracto) {
      query = { extracto, ...query };
    }

    if (url) {
      query = { url, ...query };
    }

    console.log(query);

    return await NewsModel.findOneAndUpdate({ _id: id }, { "$set": query }, {new: true});
  } catch (e) {
    throw Error(e);
  }
};

exports.deleteNew = async (id) => {
  try {
    console.log(id);

    return await NewsModel.findOneAndDelete({ _id: id });
  } catch (e) {
    throw Error(e);
  }
};