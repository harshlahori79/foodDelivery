import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    location:{
        type:String,
        required:true,
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model("user" , userSchema);
 export default User;