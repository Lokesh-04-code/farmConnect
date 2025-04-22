const mongoose=require("mongoose");

const cropSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"farmer",
    },
    name:{
        type:String,
        required:[true,'please add the name of crop']
    },
    type:{
        type:String,
        required:[true,'please add the type of crop']
    },
    farmerName:{
        type:String,
        required:[true,'please add the farmerName'],
       
    },
    city:{
        type:String,
        required:[true,'please add the city'],
       
    },
    pincode:{
        type:String,
        required:[true,'please add the pincode'],
      
    },
    phone:{
        type:String,
        required:[true,'please add the phone number'],
    },
    quantity:{
        type:String,
        required:[true,'please add the quantity'],
    }
},
{
    timestamps:true,
})

module.exports=mongoose.model("crop",cropSchema);