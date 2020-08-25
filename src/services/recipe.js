'use strict'

const Helper = require('../helpers/index.js');
const RecipeModel = require('../models/recipe');
const PatientModel = require('../models/patient');
const ProfessionalModel = require('../models/professional');

exports.getRecipes = async (query, page, limit) => {
  try {
    return await RecipeModel.paginate(query, { page, limit });
  } catch (e) {
    throw Error(e);
  }
};

exports.getRecipeById = async (id) => {
  try {
    return await RecipeModel.find({ _id: id });
  } catch (e) {
    throw Error(e);
  };
}

// TODO hacer servicio para upload de archivos
exports.createRecipe = async (files, attributes) => {
  try {
    console.log(attributes);

    if (!files) {
      throw Error("Recipe attached file is required");
    }

    const { patientId, professionalId, description, date = (new Date()) } = attributes;
    const patient = await PatientModel.find({ _id: patientId });
    const professional = await ProfessionalModel.find({ _id: professionalId });

    // move file yo /upload path
    files.recipeFile.mv('./uploads/' + files.recipeFile.name);

    const newRecipe = await RecipeModel.create({
      patient: patient,
      professional: professional,
      description: description,
      file: {
        name: files.recipeFile.name,
        mimetype: files.recipeFile.mimetype,
        size: files.recipeFile.size
      },
      date: date,
      createdByUser: {}
    });

    console.log(newRecipe);
    return newRecipe;
  } catch (e) {
    throw Error(e);
  }
}

// TODO mejorar validación cuando un campo es undefined (no alcanza con destructurar attributes)
exports.updateRecipe = async (id, attributes) => {
  try {
    console.log(attributes);
    const { description, url } = attributes;

    return user.findOneAndUpdate(
      { _id: id },
      {
        description: description,
        url: url
      },
      { new: true }
    );
  } catch (e) {
    throw Error(e);
  }
}

exports.deleteRecipe = async (id) => {
  try {
    console.log(id);
    const deleted = await RecipeModel.findOneAndDelete({ _id: id });
    console.log(deleted);
    return deleted;
  } catch (e) {
    throw Error(e);
  }
}