const asyncHandler = require("express-async-handler");
const buyer = require("../models/buyerModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const registerBuyer = asyncHandler(async (req, res) => { 
 
    const { username, email, password, city, pincode, phone } = req.body;
    
    if (!username || !email || !password || !city || !pincode || !phone) {
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    const userAvailable = await buyer.findOne({ email })
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered");
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const user = await buyer.create({
        username,
        email,
        password: hashPassword,
        city,
        pincode,
        phone,
    });
    console.log("Buyer created successfully");
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(400);
        throw new Error("User data is not valid");
    }
   });

const loginBuyer = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log("login buyer");
    if (!email || !password) {
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    const user = await buyer.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            }
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "7d"
        });
        res.status(200).json({ accessToken })
    } else {
        res.status(401);
        throw new Error("Email or password is not valid");
    }
   
}
);

const currentBuyer = asyncHandler(async (req, res) => {
    const {email}=req.user;
    
    if(!email) {
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    
    const buyer1 = await buyer.findOne({ email });
    if(!buyer1){
        res.status(401);
        throw new Error("User not found");
    }
    res.status(200).json(buyer1);
}
);

   module.exports = {
    registerBuyer,loginBuyer,currentBuyer
   };