import  express from "express";
const Router = express.Router();

Router.post('/displaydata' , async(req,res)=>{

    try{
        res.send([global.foodItem ,global.foodCategory]);

    }
    catch(error)
    {
        console.log("error in display data file -->  ",error.message)
    }
   
})

export default Router;