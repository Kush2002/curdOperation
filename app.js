const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const viewRouter = require('./router/viewRouter');
const userRouter = require('./router/userRouter');

const app = express();
app.use(express.json());
dotenv.config({ path: './.env' });
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log('Database Connection Successfully'))
  .catch((err) => console.log('Database Connection Failed', err));

// Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log('header', req.headers);
  console.log('cookies', req.cookies);
  next();
});

// ROUTER'S CREATED
app.use('/', viewRouter);
app.use('/api/user', userRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server Running On http://127.0.0.1:${port}`);
});
