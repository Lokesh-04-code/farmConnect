const asyncHandler = require("express-async-handler");
const farmer = require("../models/farmerModel");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");


const registerFarmer=asyncHandler(async (req,res)=>{     
 const {username,email,password,city,pincode,phone}=req.body;
 if(!username || !email || !password || !city || !pincode || !phone){
     res.status(400);
     throw new Error("Please fill all the fields");
 }
 const userAvailable=await farmer.findOne({email})
 if(userAvailable){
    res.status(400);
    throw new Error("use already reigistered"); 
 }
  const hashPassword=await bcrypt.hash(password,10)

  const user= await farmer.create({
    username,
    email,
    password:hashPassword,
    city,
    pincode,
    phone,
  });
  console.log("farmer created succesfully")
  if(user){
    res.status(201).json({_id:user.id,email:user.email});
  }
    else{
        res.status(400);
        throw new Error("User data is not valid");
    }
});

const loginFarmer=asyncHandler(async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    const user=await farmer.findOne({email});
    if(user && (await bcrypt.compare(password,user.password) )){
        const accessToken=jwt.sign({
             user:{
                username:user.username,
                email:user.email,
                id:user.id,

             }
        },process.env.ACCESS_TOKEN_SECRET,{
            expiresIn:"7d"
        });
        res.status(200).json({status:"success",accessToken})
    }
    else{
        res.status(401);
        throw new Error("Email or password is not valid");
    }
   

}
);



const currentFarmer = asyncHandler(async (req, res) => {
  const { email } = req.user;  // Get email from the decoded token (req.user)
  console.log(email);
  if (!email) {
      res.status(400);
      throw new Error("Email is missing");
  }

  // Fetch the farmer data by email from the database
  const farmer1 = await farmer.findOne({ email });

  if (!farmer1) {
      res.status(404);
      throw new Error("Farmer not found");
  }

  // Respond with the farmer's data
  res.status(200).json(farmer1);
});

module.exports={
    registerFarmer,
    loginFarmer,currentFarmer
}