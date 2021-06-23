const express = require('express');
const router = express.Router();

// =========================================== Endpoint
const Post = require('../models/post');

// =========================================== Endpoint
router.post('/new', async (req, res) => {
    var datosPost = req.body;
    var newPost = await new Post(datosPost);
    newPost.save();

    res.send({
        message: 'Nuevo Post',
        post: post
    });
})

router.put('/edit/:PostID', async (req, res) => {
    var PostID = req.params.PostID
    var datosPost = req.body;

    var post = await Post.findOne({ postID: postID });
    post.content = datosPost.content;
    await post.save();

    res.send({
        message: 'Actualizar post: ' + PostID,
        post: post
    });
});

router.get('/all', (req, res) => {
    res.send({
        message: 'Estas en /all'
    });
});

router.get('/post/:PostID', (req, res) => {
    res.send({
        message: 'Este es el post: ' + req.params.PostID
    });
});

router.delete('/deletePost', (req, res) => {
    var PostID = req.body.PostID;
    res.send({
        message: 'Este post ha sido eliminado: ' + PostID
    });
});

module.exports = router;