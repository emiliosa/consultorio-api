'use strict'

const appointmentService = require('../services/appointment');

exports.getAppointments = async (req, res, next) => {
  try {
      const page = req.query.page ? req.query.page : 1
      const limit = req.query.limit ? req.query.limit : 10;
      const appointments = await appointmentService.getAppointments({}, page, limit);
      return res.status(200).json({status: 200, data: appointments});
  } catch (e) {
      return res.status(400).json({status: 400, message: e.message});
  }
};

exports.getAppointmentById = async (req, res, next) => {
  try {
      const appointment = await appointmentService.getAppointmentById(req.params.id);
      console.log(appointment);
      return res.status(200).json({status: 200, data: appointment});
  } catch (e) {
      return res.status(400).json({status: 400, message: e.message});
  }
};

exports.createAppointment = async (req, res, next) => {
  try {
      const appointment = await appointmentService.createAppointment(req.body);
      console.log(appointment);
      return res.status(200).json({status: 200, data: appointment});
  } catch (e) {
      return res.status(400).json({status: 400, message: e.message});
  }
};

exports.updateAppointment = async (req, res, next) => {
  try {
      const appointment = await appointmentService.updateAppointment(req.params.id, req.body);
      console.log(appointment);
      return res.status(200).json({status: 200, data: appointment});
  } catch (e) {
      return res.status(400).json({status: 400, message: e.message});
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const appointment = await appointmentService.deleteAppointment(req.params.id);
    console.log(appointment);
    return res.status(200).json({status: 200, data: appointment});
  } catch (e) {
    return res.status(400).json({status: 400, message: e.message});
  }
};