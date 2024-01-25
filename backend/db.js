//const mongoose = require('mongoose');
import mongoose from "mongoose";
const URI = "mongodb+srv://admin:admin@cluster0.nqz5luc.mongodb.net/fooddelivery?retryWrites=true&w=majority"



const dbConnection = async() =>
{
    

    try{
        await mongoose.connect(URI);
        console.log("connected to database successfully");

       
        const fetched_data =await mongoose.connection.db.collection("foodItem").find({}).toArray();
        global.foodItem = fetched_data;
        const fetched_data2 =await mongoose.connection.db.collection("foodCategory").find({}).toArray();
        global.foodCategory = fetched_data2;

        //console.log(foodCategory);


        
        //console.log("fetched data : " , fetched_data)
        

        

    }
    catch(error)
    {
        console.log("Error in db connection :----- " , error.message);
    }
}

export default dbConnection;


