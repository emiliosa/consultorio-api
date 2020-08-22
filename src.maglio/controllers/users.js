const Sequelize = require('sequelize');
const users = require('../models').users;

module.exports = {

	/**
	 * Users Create
	 */
	create(req, res) {
		return users
			.create({
				username: req.body.username,
				email: req.body.email,
				status: req.body.status
			})
			.then(users => res.status(200).send(users))
			.catch(error => res.status(400).send(error))
	},

	/**
	 * List of Users
	 */
	list(_, res) {
		return users
			.findAll({})
			.then(users => res.status(200).send(users))
			.catch(error => res.status(400).send(error))
	},

	/**
	 * Find a user
	 */
	find(req, res) {
		return users
			.findAll({
				where: {
					username: req.params.username,
				}
			})
			.then(users => res.status(200).send(users))
			.catch(error => res.status(400).send(error))
	}

}