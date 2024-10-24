const express=require('express')
const app=express()
app.get('/',(req,res)=>
{
  res.send("hi hola")
})
app.listen(3000)

app.get('/:username',(req,res)=>
{
  res.send("hi "+ req.params.username)
})
app.get('/:username/:age',(req,res)=>
  {
    res.send("hi "+ req.params.username +" "+req.params.age)
  })
