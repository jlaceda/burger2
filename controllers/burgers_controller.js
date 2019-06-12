const express = require('express');
const db = require('../models');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get('/', (req, res) => {
	db.burger.findAll({})
	.then(burgers => {
		res.render('index', { burgers });
	})
	.catch(err => {
		console.error(err);
		res.status(500).end();
	});
});

router.post('/', (req, res) => {
	db.burger.create({ burger_name: req.body.burgerName })
	.then(createResponse => {
		console.log(createResponse);
		res.redirect('/');
	})
	.catch(err => {
		console.error(err);
		if (err.message === "Validation error: Validation len on burger_name failed") {
			res.status(400).send("Please go back and enter valid burger name.");
		}
		res.status(500).send(err.message);
	});
})

router.put('/:id', async (req, res) => {
	db.burger.update(
		{ devoured: true }, 
		{ where: { id: req.params.id }})
	.then(devourResponse => {
		console.log(devourResponse);
		res.status(201).end();
	})
	.catch(err => {
		console.error(err);
		res.status(500).end();
	})
});

router.get('*', (req, res) => res.redirect('/'));

module.exports = router;
