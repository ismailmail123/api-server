const userRoute = require ('express').Router();
const UserController = require('../controllers/UserController');

userRoute.post('/', UserController.create);



module.exports = userRoute;