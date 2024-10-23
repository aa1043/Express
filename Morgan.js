const express=require('express')
const morgan=require('morgan')
const app=express()
app.use(morgan("tiny"))//or app.use(morgan("dev")) or etc go on npmis.com to see more
app.get('/morgan',(req,res)=>
{
  res.send("haloooooooooo")
})
app.listen(3000)