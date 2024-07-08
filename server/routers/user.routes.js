const router = require('express').Router();
const { isAdmin } = require('../middleware/user.middleware');
const userController = require('../controllers/user.controller');

router.get('/', isAdmin, userController.getAllUser);
router.post('/login', userController.userLogin);
router.post('/register', userController.userRegister);

module.exports = router;