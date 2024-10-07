const express=require('express')
const app=express()
const expressSession=require('express-session')
const port=3000
app.use(expressSession({
  secret:"random",// secret key we will know better during apps
  resave:"false",// If no changes are made then it does not gets saved again
  saveUninitialized:"false"// if a user comes and does not log in then also his information will not get saved
}))
app.get('/',(req,res)=>
{
  res.send("<h1>Hi laundeeeeeeeeeeeeee</h1><h2>Kya haal</h2>")
})

app.get("/hi",(req,res)=>
  {
    req.session.name=true;// just create a session req.session.(session name)
    res.send("<h1>Hi laundeeeeeeeeeeeeee</h1><h2>Hi</h2>")
  })
app.get("/check",(req,res)=>
{
  res.send("check")
  console.log(req.session.name);//  true on refresh gives undefined
  
})
app.listen(port,()=>
{
  console.log(`Sever has been succesfully fired on Port ${port}`);
})