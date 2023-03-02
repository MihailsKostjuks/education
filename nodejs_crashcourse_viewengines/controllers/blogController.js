// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const Blog = require("../models/blog");

const blog_index = (req, res) => {
    Blog.find()
        .then((result) => {
            res.render('index', {title: 'All blogs', blogs: result})
            // sending to index.ejs an object: title (assigned rn, just a string), and blogs (object with titles, snippets, bodies)
            // index.ejs loops through this blogs object and reaches each key.value (blog.title, blog.snippet, blog.body)
            // and loggs it to the browser
        })
        .catch((err) => console.log(err));
}

const blog_details = (req, res) => {
    const id = req.params.id; // :id => params.id
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details'}); // sending data to details.ejs and rendering it
        })
        .catch(err => console.log(err));
}

const blog_create_get = (req, res) => {
    res.render('create', {title: 'create a new blog'});
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body); // .body contains all the information
    blog.save() // saves blog instance to the DB
        .then((result) => res.redirect('/blogs'))
        .catch((error) => console.log(error));
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = { // list of functions to be exported into blogRoutes.js
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}