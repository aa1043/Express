// This is like we can save some data in one route and use it on another route


const express=require('express')
const expresSession=require('express-session')
const flash=require('connect-flash');
const app=express()
const port=3000
app.use(expresSession({
  secret:'location',
  resave:false,
  saveUninitialized:false
}));
app.use(flash())

app.get('/',(req,res,next)=>
{
  req.flash("error","Invalid Id")
  res.redirect("/error")
})
app.get('/error',(req,res,next)=>{
  let msg=req.flash('error')
  res.send(msg)
})
app.listen(port,()=>
{

})