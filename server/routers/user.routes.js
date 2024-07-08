const router = require('express').Router();
const { isAdmin } = require('../middleware/user.middleware');
const userController = require('../controllers/user.controller');

router.get('/home', isAdmin, userController.getAllUser);


module.exports = router;