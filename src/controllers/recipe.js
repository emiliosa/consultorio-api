'use strict'

const recipeService = require('../services/recipe');
const upload = require('../middlewares/upload');

exports.getRecipes = async (req, res, next) => {
  try {
    const page = req.query.page ? req.query.page : 1
    const limit = req.query.limit ? req.query.limit : 10;
    const filters = req.query.filters ? req.query.filters : {};
    const recipes = await recipeService.getRecipes(filters, page, limit);
    return res.status(200).json({ status: 200, data: recipes });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getRecipeById = async (req, res, next) => {
  try {
    const recipe = await recipeService.getRecipeById(req.params.id);
    console.log(recipe);
    return res.status(200).json({ status: 200, data: recipe });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.createRecipe = async (req, res, next) => {
  try {
    const recipe = await recipeService.createRecipe(req.files, req.body, req.user);
    console.log(recipe);
    // await upload(req, res);
    // console.log(req.files);
    return res.status(200).json({ status: 200, data: recipe });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.updateRecipe = async (req, res, next) => {
  try {
    const recipe = await recipeService.updateRecipe(req.params.id, req.files, req.body);
    console.log(recipe);
    return res.status(200).json({ status: 200, data: recipe });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.downloadFiles = async (req, res, next) => {
  try {
    const filepath = await recipeService.getFile(req.params.id, req.params.filename);
    return res.download(filepath);
    // return res.status(200).json({ status: 200, data: {} });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.stack });
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await recipeService.deleteRecipe(req.params.id);
    console.log(recipe);
    return res.status(200).json({ status: 200, data: recipe });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};