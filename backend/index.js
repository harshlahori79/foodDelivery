import express from 'express';
const app = express();
const port = 5000;
import dbConnection from './db.js';
import cors from 'cors';
//import Router from './routes/userCreation.js'
import userCreationrouter from './routes/userCreation.js'
import displaydatarouter from './routes/DisplayData.js'
import orderdatarouter from './routes/Orderdata.js'

dbConnection();

app.use(cors());
app.get('/' , (req,res)=>
{
    res.send("hello world");
})

app.use(express.json());

app.use("/api",userCreationrouter);
app.use("/api",displaydatarouter);
app.use("/api",orderdatarouter);

app.listen(port , ()=>{
    console.log("app is listening at port 5000");
})
