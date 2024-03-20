const express = require('express');
const viewController = require('../controller/viewController');

const router = express.Router();

router.get('/', viewController.index);
router.get('/home', viewController.home);
router.get('/login', viewController.getLogin);

module.exports = router;
