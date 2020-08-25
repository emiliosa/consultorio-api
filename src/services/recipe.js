'use strict'

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
};

exports.createRecipe = async (files, attributes, user) => {
  try {
    console.log(files, attributes, user);

    if (!files) {
      throw Error("Recipe attached file is required");
    }

    const { patientId, professionalId, description, date = (new Date()) } = attributes;
    const patient = await PatientModel.find({ _id: patientId });
    const professional = await ProfessionalModel.find({ _id: professionalId });
    const filesArray = [];

    // convertir a array
    files.recipeFiles = !Array.isArray(files.recipeFiles)
      ? [files.recipeFiles]
      : files.recipeFiles;

    // crear receta
    let newRecipe = await RecipeModel.create({
      patient: patient,
      professional: professional,
      description: description,
      date: date,
      files: [],
      createdByUser: user
    });

    files.recipeFiles.map(file => {
      file.mv(`./public/uploads/recipes/${newRecipe._id}/${file.name}`);

      filesArray.push({
        name: file.name,
        mimetype: file.mimetype,
        size: file.size
      });
    });

    // agregar archivos adjuntos
    newRecipe = await RecipeModel.findOneAndUpdate(
      { _id: newRecipe._id },
      { files: filesArray },
      { new: true }
    );

    return newRecipe;
  } catch (e) {
    throw Error(e);
  }
};

// TODO mejorar validación cuando un campo es undefined (no alcanza con destructurar attributes)
// TODO actualizar archivos
exports.updateRecipe = async (id, files, attributes) => {
  try {
    console.log(files, attributes);

    const { description } = attributes;

    if (files) {
      const filesArray = [];
      files.recipeFiles = !Array.isArray(files.recipeFiles)
        ? [files.recipeFiles]
        : files.recipeFiles;
    }


    return user.findOneAndUpdate(
      { _id: id },
      {
        description: description,
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
};