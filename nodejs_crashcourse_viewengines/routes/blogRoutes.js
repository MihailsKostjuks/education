const Blog = require("../models/blog");
const express = require('express');
const router = express.Router();
const blogController = require("../controllers/blogController");

// mongoose and mongo sandbox routes
router.get('/add-blog', (req, res) => {
    const blog = new Blog({ // creating a blog instance using Blog() model from ./models/blog.js
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'some detailed info'
    });

    blog.save() // we always need to save it. save() returns a promise (success/failure). We handle it in 2 ways:
        .then((result) => res.send(result)) // either respond with a result (send to the db)
        .catch((error) => console.log(error)); // or logg an error
})

router.get('/single-blog', (req, res) => {
    Blog.findById('63efe07e02dd6b1218feea51')
        .then((result) => res.send(result))
        .catch((error) => console.log(error));
})

router.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => res.send(result))
        .catch((error) => console.log(error));
})
// how Routes & Controllers work
router.get('/', blogController.blog_index); // two args: url & function from blogController.js imported above

router.post('/', blogController.blog_create_post)

router.get('/create', blogController.blog_create_get);

// route parameters
router.get('/:id', blogController.blog_details);

router.delete('/:id', blogController.blog_delete);

module.exports = router;

// app.get('/', (req, res) => { // get takes 2 args: url and arrow function: res/req
//     const blogs = [
//         {title: 'first blog', snippet: 'dasdadsssdsadas'},
//         {title: 'second blog', snippet: 'dasdasdsadas'},
//         {title: 'third blog', snippet: 'dasdasdsgffadas'}
//     ]
//     res.render('index', {title: 'home', blogs: blogs}); // {var_name : var_value}. title & blogs can be used in ejs now
// })