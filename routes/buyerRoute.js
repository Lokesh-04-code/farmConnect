const express = require('express');
const router=express.Router()
const {registerBuyer,loginBuyer,currentBuyer}=require('../controllers/buyerController');
const validateToken = require('../middleware/validateTokenHandler');

router.post('/register',registerBuyer);

router.post('/login',loginBuyer);

router.get('/current',validateToken,currentBuyer);



module.exports=router;