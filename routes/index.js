const usersController=require('../controller/user_controllers')
const ordersController=require('../controller/order_controller')

const express=require('express')

const app=express();

const router = express.Router()
const passport=require('passport')


router.get('/',usersController.index);
router.post('/add-user',usersController.register);
router.get('/login-user',usersController.login);
router.post('/add-order',passport.authenticate('jwt',{session:false}),ordersController.register);
router.get('/get-order',passport.authenticate('jwt',{session:false}),ordersController.ordersDetails);
router.get('/create-session',usersController.createSession);

module.exports = router;

