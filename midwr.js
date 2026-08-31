
// // Middleware in Express 
// // it is a function which runs before the final route handler

// const express = require('express');

// const app = express();

// app.get('/',(req,resp) =>{
//     resp.send("Home Page");
// })

// app.get('/users',(req,resp) =>{
//     resp.send("Users Page");
// })

// app.get('/products',(req,resp) =>{
//     resp.send("Products Page");
// })

// app.listen(4000);

// // middleware 
// function checkRoute(req,resp,next){
//     console.log(req.url);
//     next();
// }

// app.use(checkRoute)

