import mongoose from "mongoose";

const {Schema} = mongoose;

const orderschema = new Schema({
    
    order_data  : {
        type : Array,
        required : true,
        
    },
    email : {
        type : String,
        required : true,
        unique: true
    }

})


export const Order = mongoose.model("order" , orderschema);