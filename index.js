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
import Home from './pages/home.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';

const express = require('express'); // CommonJS import syntax vanile 

const app = express();

app.get('/', (req, res) => {
  res.send(Home);
});

app.get('/about', (req, res) => {
  res.send(About);
});

app.get('/contact', (req, res) => {
  res.send(Contact);
});

app.listen(3200);






