const express = require('express');
const exphbs = require('express-handlebars');

const db = require('./models');

db.sequelize.sync()
.then(() => {
	console.log('Connected to database.');

	const app = express();
	const PORT = process.env.PORT || 3000;

	app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
	app.set('view engine', 'handlebars');

	app.use(require('./controllers/burgers_controller'))
	app.listen(PORT, () => {
		console.log('Listening on port %s', PORT);
	});
})
.catch(err => {
	console.error('Error connecting to database', err);
});
