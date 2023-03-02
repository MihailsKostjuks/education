const mongoose = require('mongoose');
const Schema = mongoose.Schema; // defines the structure of a document we are going to store into our DB
const blogSchema = new Schema({ // 1. we make our schema
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true}) // automatically generates timestamts properties for our document (optional)

// 2. we create a model based on that schema
const Blog = mongoose.model('Blog', blogSchema) // (name, schema)
// 3. we define a name of this model
// which is a singular of our collection's name (Blog => blogs)

module.exports = Blog;