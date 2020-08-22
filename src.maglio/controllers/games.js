const Sequelize = require('sequelize');
const games = require('../models').games;

module.exports = {

	/**
	 * Games Create
	 */
    create(req, res) {
        return games
            .create({
                name: req.body.name,
                description: req.body.description,
                status: req.body.status
            })
            .then(games => res.status(200).send(games))
            .catch(error => res.status(400).send(error))
    },

	/**
	 * List of Games
	 */
    list(_, res) {
        return games
            .findAll({})
            .then(games => res.status(200).send(games))
            .catch(error => res.status(400).send(error))
    },

	/**
	 * Find a Game
	 */
    find(req, res) {
        return games
            .findAll({
                where: {
                    name: req.body.name,
                }
            })
            .then(games => res.status(200).send(games))
            .catch(error => res.status(400).send(error))
    }

}