const express = require('express');
const route=express.Router();
const {createCrop,getCrops,getCrop,updateCrop,deleteCrop}=require('../controllers/cropController');

const validateToken = require('../middleware/validateTokenHandler');
route.use(validateToken)
route.route("/create").post(createCrop);
route.route("/").get(getCrops);
route.route("/:id").get(getCrop).put(updateCrop).delete(deleteCrop);
//route.route("/:id")

module.exports=route;