import  express  from "express";
import User from "../model/createUser.js";
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
const secret = "rajmachawalyadaalrotiburger34567#$";

const Router = express.Router();


    Router.post('/createuser' , async(req,res)=>
    {
        try{
            const salt = await bcrypt.genSalt(10);
            const secPassword = await bcrypt.hash(req.body.password , salt);

            await User.create(
                {
                    name :req.body.name ,
                    email : req.body.email,
                    password : secPassword,
                    phone :req.body.phone ,
                    location :req.body.location 
                }

            )
            
            res.json({success : true});
        }
        catch(error)
        {
            res.json({success : false});
            console.log("error in userCreation.js wala page  " , error.message);
        }
    })
    

    Router.post('/loginuser' , async(req,res)=>
    {
        try{

            const useremail = req.body.email;
            //console.log(useremail);
            
           const emailresponse = await User.findOne({email:useremail});
           //console.log(emailresponse);

           if(!emailresponse)
           {
                return res.status(400).json({"error" : "error in email"});
           }
            
           const password = req.body.password;
           const authPassword = bcrypt.compare(password , emailresponse.password);

           if(!authPassword)
           {
            return res.status(400).json({error:"error in password"});
           }
           const data = {
            user:{
                id:emailresponse.id
            }
           };

           const authToken = jsonwebtoken.sign(data , secret);

           if(authPassword)
           {
            return res.status(200).json({success:true , authToken:authToken});
           }
           
           
        }
        catch(error)
        {
            res.json({success : false});
            console.log("error in userCreation.js wala page in loginuser -----> " , error.message);
        }
    })


export default Router;
