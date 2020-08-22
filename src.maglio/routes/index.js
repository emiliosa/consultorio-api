const userController = require('../controllers').users;
const gameController = require('../controllers').games;
const playedController = require('../controllers').played;

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'You´re in my place m**** fu***',
	}));

	// API Services Users
	app.post('/api/user/create', userController.create);
	app.get('/api/user/list', userController.list);
	app.get('/api/user/find/username/:username', userController.find);

	// API Services Games
	app.post('/api/games/create', gameController.create);
	app.get('/api/games/list', gameController.list);
	app.get('/api/games/find/name/:name', gameController.find);


	// API Services Played
	app.post('/api/played/create', playedController.create);
	app.get('/api/played/list', playedController.list);
	app.get('/api/played/find', playedController.find);
}