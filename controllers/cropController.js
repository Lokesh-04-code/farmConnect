const asyncHandler = require("express-async-handler");
const crop = require("../models/cropModel");
const farmer = require("../models/farmerModel");



//@desc get all crops
//@route Post /api/contacts
//@access Private
//201 resource created 


const getCrops=asyncHandler( async (req,res)=>{
    const crops= await crop.find({user_id:req.user.id});
    res.status(200).json(crops);
});


const createCrop = asyncHandler(async (req, res) => {
    const { name, type } = req.body;
    const { email } = req.user;
 
    if (!email || !name || !type) {
      res.status(400);
      throw new Error("Required fields are missing");
    }
  
    // Find the farmer
    const farmer1 = await farmer.findOne({ email });
    
    if (!farmer1) {
      res.status(404);
      throw new Error("Farmer not found");
    }

    // Check for existing crop with the same name for this farmer
    
    // Create new crop
    const crop1 = await crop.create({
      name: name,
      type: type,
      farmerName: farmer1.username,
      user_id: farmer1._id,
      city: farmer1.city,
      pincode: farmer1.pincode,
      phone: farmer1.phone,
      quantity: req.body.quantity,
    });
  
    res.status(201).json(crop1);
    console.log("Crop created successfully");
  }); 
  
  const getCrop = asyncHandler(async (req, res) => {
    const crops = await crop.findOne({ _id: req.params.id }); // corrected here
    if (!crops) {
      res.status(404);
      throw new Error("Crop not found");
    }
    res.status(200).json(crops);
  });
  
  const updateCrop = asyncHandler(async (req,res)=>{
      const crop1= await crop.findById(req.params.id);
      if(!crop1){
          res.status(404);
          throw new Error("Contact not found");
      }
  
      //d ifferent user is trying to update the contact
      if(crop1.user_id.toString() !== req.user.id){
          res.status(403);
          throw new Error("User not have permission to update the other users contact");
      }
      const updatedCrop=await crop.findByIdAndUpdate(req.params.id,req.body,{
          new:true,
      });
      res.status(200).json(updatedCrop)
  });


  const deleteCrop=asyncHandler( async (req,res)=>{
      const crop1=await crop.findById(req.params.id);
      if(!crop1){
          res.status(404);
          throw new Error("Contact not found");
      }
      if(crop1.user_id.toString() !== req.user.id){
          res.status(403);
          throw new Error("User not have permission to delete the other users contact");
      }
     const cropd=await crop.findByIdAndDelete(req.params.id);
     res.status(200).json(cropd);
  })

  module.exports = {
    createCrop,getCrops,getCrop,updateCrop,deleteCrop
  }