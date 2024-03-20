const catchAsync = require('../utils/catchAsync');
const User = require('../model/userModel');

exports.index = catchAsync(async (req, res, next) => {
  res.status(200).render('index', {
    title: 'Home',
    text: 'DashBoard',
  });
});

exports.home = catchAsync(async (req, res, next) => {
  res.status(200).render('home');
});

exports.getLogin = catchAsync(async (req, res, next) => {
  const login = await User.findOne({ _id: req.params.id });
  // console.log(login)
  res.status(200).render('login', {
    title: 'Project Login',
    text: 'Login',
    log: login,
  });
});
