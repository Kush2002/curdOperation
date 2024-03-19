const express = require('express');
const mongoose =  require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
dotenv.config({ path:'./.env'});

app.use(express.static(path.join(__dirname, 'public')));

mongoose
	.connect(process.env.DATABASE)
	.then(() => console.log('Database Connection Successfully'))
	.catch((err) => console.log('Database Connection Failed',err));

const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`Server Running On http://127.0.0.1:${port}`)
});
