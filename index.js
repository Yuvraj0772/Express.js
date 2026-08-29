// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.listen(3000);

// How Express Works

// const express = require('express');

// const app = express();

// app.listen(3400); // no need to create a server, express does it for you

// console.log(app); // you can find all api method in terminal

// app.get('/', (req, res) => {
//   res.send("<h1>Home Page !</h1>");
// });

// app.get('/about', (req, res) => {
//   res.send("<h1>About Page !</h1>");
// });

// if both route is same then it will execute the first one and ignore the second one

// Use ES import & export

//import express from 'express'; // ES module import syntax


// render html elemments and forms 

// const express = require('express');

// const app = express();

// app.get("/",(req,resp) =>{
//   resp.send("<h1>Home Page</h1> <br/> <a href='/login'>GO TO LOGIN</a>");
// })

// app.get("/login", (req, res) => {
//     res.send(`
//         <form action="/submit" method="post">
//             <input type="text" name="username" placeholder="Enter your username" />
//             <br />
//             <br/>
//             <input type="password" name="password" placeholder="Enter your password" />
//             <br />
//             <br/>
//             <button type="submit">Login</button>
//         </form>    `);
// });

// app.post("/submit", (req, res) => {
//     // Handle form submission logic here
//     res.send("<h1>Form submitted successfully!</h1>");
// });

// app.listen(3200);

const express = require('express');

const app = express();

const path = require('path');

app.listen(3200);



app.get("/", (req, res) => {
    // dir name is not available in ES module, so we have to use path module to get the absolute path of the file
    const absPath = path.resolve("view/home.html");
    res.send("<h1>Home Page</h1> <br/> <a href='/login'>GO TO LOGIN</a>");
    res.sendFile(absPath);
});
