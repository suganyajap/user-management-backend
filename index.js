require("dotenv").config()
const express=require("express")
const cors=require("cors")
const app=express()
const db =require("./db");
const userRoute=require("./userRoute");



app.use(cors())

app.use(express.json())
    
 db.connect()


app.use("/users",userRoute);


const PORT=process.env.PORT

app.get('/',(request,response)=>
{
    response.send("Hello welcome to user management");
});

app.listen(PORT,()=>console.log("App is started in PORT",PORT))