const express = require('express');
const router = express.Router();

//Importar el modelo de datos de Posts
const Post = require('../models/post');

//Definir los endpoints
router.post('/new', async function(req, res) {
    var datosPost = req.body;
    var post = await new Post(datosPost);
    await post.save();

    res.send({
        message: "POST de nueva publicación",
        post: post
    });
});

router.put('/edit/:PostID', async function(req, res) {
    var postID = req.params.PostID;
    var datosPost = req.body;

    var post = await Post.findOne({postID: postID});
    post.content = datosPost.content;
    await post.save();

    res.send({
        message: "Se actualizó el post: " + postID,
        post: post
    });
});

router.get('/all', function(req, res) {
    
});

router.get('/post/:PostID', function(req, res) {
    var postID = req.params.PostID;
});

router.delete('/deletePost', function(req, res) {
    var postID = req.body.postID;
});

module.exports = router;