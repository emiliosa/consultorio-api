const Sequelize = require('sequelize');
const Op = Sequelize.Op;
// Models that we use
const played = require('../models').played;
const users = require('../models').users;
const games = require('../models').games;

module.exports = {

	/**
	 * Create new play
	 */
	create(req, res) {

		// User
		const responseUser = users.findOne({
			where: {
				[Op.or]: [{
					username: req.body.user
				}, {
					id: req.body.user
				}]
			}
		})

		// Game
		const responseGame = games.findOne({
			where: {
				[Op.or]: [{
					name: req.body.game
				}, {
					id: req.body.game
				}]
			}
		})

		Promise
			.all([responseUser, responseGame])
			.then(responses => {
				return played
					.create({
						user_id: responses[0].id,
						game_id: responses[1].id,
						status: req.body.status,
					})
					.then(played => res.status(200).send(played))
					.catch(error => res.status(400).send(error))
			})
	},

	/**
	 * List of Played
	 */
	list(_, res) {
		return played
			.findAll({
				include: [{
					model: users,
					as: 'users'
				}, {
					model: games,
					as: 'games'
				}]
			})
			.then(played => res.status(200).send(played))
			.catch(error => res.status(400).send(error))
	},

	/**
	 * Find a Played
	 */
	find(req, res) {
		// User
		const responseUser = users.findOne({
			where: {
				[Op.or]: [{
					username: req.body.user
				}, {
					id: req.body.user
				}]
			}
		})

		// Game
		const responseGame = games.findOne({
			where: {
				[Op.or]: [{
					name: req.body.game
				}, {
					id: req.body.game
				}]
			}
		})

		Promise
			.all([responseUser, responseGame])
			.then(responses => {
				return played
					.findAll({
						where: {
							user_id: responses[0].id,
							game_id: responses[1].id,
						}
					})
					.then(played => res.status(200).send(played))
					.catch(error => res.status(400).send(error))
			})
	}

}