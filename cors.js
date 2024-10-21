// CORS are used when you want to share data between two web domains

const express=require('express')
const cors=require("cors")
const app=express()
app.use(cors());
app.get("/",(req,res)=>
{
  res.send("helooooooooooooo")
})
app.get("/shareable",cors(),(req,res)=>//if you want to exclusively share a particular route otherwise no need
  {
    res.send("helooooooooooooo")
  })
app.listen(3000)