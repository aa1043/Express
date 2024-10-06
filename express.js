const express=require('express')
const app=express()
const port=3000
//         MIDDLEWARE
app.use((req,res,next)=>{
  console.log("Fire the middleware");
  next()
});
app.use((req,res,next)=>{
  console.log("Fire the middleware againn");
  next()
});
//         END POINTS
app.get('/',(rq,res)=>
{
  res.send("<h1>Hi laundeeeeeeeeeeeeee</h1><h2>Kya haal</h2>")
})
app.get('/about',(rq,res)=>
  {
    res.send("<h1>Hi laundeeeeeeeeeeeeee</h1><h2>Kya haal laundeeeeeeeeeeeeeee</h2>")
  })
app.get('*',(req,res)=>
{
  res.send('Toh bolo hi ')
})
app.listen(port,()=>
{
  console.log(`Sever has been succesfully fired on Port ${port}`);
})