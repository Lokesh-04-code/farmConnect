const express = require('express');
const router=express.Router()
const {registerFarmer,currentFarmer,loginFarmer}=require('../controllers/farmerController');
const validateToken = require('../middleware/validateTokenHandler');

router.post('/register',registerFarmer);

router.post('/login',loginFarmer);

router.get('/current',validateToken,currentFarmer);

module.exports=router;