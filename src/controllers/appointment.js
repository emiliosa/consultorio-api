'use strict'

const querystring = require('querystring');
const AppointmentService = require('../services/appointment');

exports.getAppointments = async (req, res, next) => {
  try {
    const page = req.query.page ? req.query.page: 1;
    const limit = req.query.limit ? req.query.limit : 10;
    const filters = req.query.filters ? req.query.filters : {};
    const appointments = await AppointmentService.getAppointments(filters, page, limit);

    return res.status(200).json({ status: 200, data: appointments });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getAppointmentById = async (req, res, next) => {
  try {
    const appointment = await AppointmentService.getAppointmentById(req.params.id);
    console.log(appointment);
    return res.status(200).json({ status: 200, data: appointment });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.createAppointment = async (req, res, next) => {
  try {
    const appointment = await AppointmentService.createAppointment(req.body, req.user);
    console.log(appointment);
    return res.status(200).json({ status: 200, data: appointment });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.updateAppointment = async (req, res, next) => {
  try {
    const appointment = await AppointmentService.updateAppointment(req.params.id, req.body);
    console.log(appointment);
    return res.status(200).json({ status: 200, data: appointment });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const appointment = await AppointmentService.deleteAppointment(req.params.id);
    console.log(appointment);
    return res.status(200).json({ status: 200, data: appointment });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};