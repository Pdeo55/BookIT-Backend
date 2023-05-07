const mongoose = require("mongoose");
const roles = require("../utils/roles")

const UserSchema = new mongoose.Schema(
  {
   name:String,
   phoneNo:{type:Number,unique:true},
   email:{type:String,unique:true},
   password:String,
   Organization:String,
   token:String,
   role:{
    type:String,
    enum:[roles.Admin,roles.Organizer,roles.User],
    default:roles.User,
   },
   Bank_Acc_No:Number,
   IFSC:String,
   PAN_No:String,
   DOB:Date,
   Address:String,
   
 
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
