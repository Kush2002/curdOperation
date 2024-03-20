exports.index = async (req, res, next) => {
  res.status(200).render('index', {
    title: 'Home',
    text: 'DashBoard',
  });
};
