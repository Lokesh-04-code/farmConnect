const mongoose=require("mongoose");

const farmerSchema=mongoose.Schema(
    {
    username:{
        type:String,
        required:[true,"Please add the username"]
    }
    ,
    email:{
        type:String,
        required:[true,"Please add the email"],
        unique:[true,"Email address already taken"]
    },
    password:{
        type:String,
        required:[true,"Please add the password"],
    },
    city:{
        type:String,
        required:[true,"please add the city"],
    },
    pincode:{
        type:String,
        required:[true,"please add the pincode"],
    },
    phone:{

        type:String,
        required:[true,"please add the phone number"],
    }
},{
    timestamps:true,
})

module.exports=mongoose.model("farmer",farmerSchema);