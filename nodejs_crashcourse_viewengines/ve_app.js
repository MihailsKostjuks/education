const express = require('express');
const mongoose = require('mongoose');
// const Blog = require('./models/blog'); we dont need this in this file anymore cause we're not interacting with Blog module
const blogRoutes = require('./routes/blogRoutes')


const app = express(); // creating express app
// connect to mongoDB
const dbURI = 'mongodb+srv://firstuser:123123123@cluster0.rfc7mms.mongodb.net/blablabla?retryWrites=true&w=majority';
mongoose.set('strictQuery', false); // get rid of DeprecationWarning
mongoose.connect(dbURI) // URI - sequence of characters that distinguishes one resource from another. (like a link to your db)
    .then((result) => app.listen(3000))
    .catch((error) => console.log(error));

app.set('view engine', 'ejs'); // register view engine


// app.listen(3000); // can be stored in const in case we need it later on to for web-sockets etc but not in current case


// creating middleware for catching some information
app.use((req, res, next) => { // this app.use method doesn't respond !!!
    // console.log(req.hostname + " " + req.path + " " + req.method);
    next(); // allows to make further response in latter app.get methods
})


// middleware
app.use(express.static('public')); // static files. Utilizes style.css from ./public directory to every further post/get/use request
app.use(express.urlencoded({extended: true})); // without it: 'undefined'
// takes all the url encoded data and passes it into an object we can use on the request object


app.get('/', (req, res) => res.redirect('/blogs'));

app.get('/about', (req, res) => { // get takes 2 args: req.url and callback function: res/req
    res.render('about', {title: 'about'});
})


// blogs routes
// if the url starts with /blogs, goes to blogRoutes.js
app.use('/blogs', blogRoutes); // checks for above requests. If there's no fit, allows to look into blogRoutes.js
// requests that are reachable (required above) by this blogRoutes instance


// 404 page
app.use((req, res) => { // runs through all the get methods looking for url that user entered,
    // if there's no such url in get methods, app.use is executed for 404.html
    res.status(404).render('404', {title: '404 error'});
});



