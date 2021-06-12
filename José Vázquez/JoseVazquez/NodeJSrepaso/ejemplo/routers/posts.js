const express = require('express');
const router = express.Router();

const Post = require('../models/post');

router.get('/all', function (req, res){
    var all = req.params.all;
    todasPublicaciones = req.body;

    res.send({
        message: 'GET de todas las Publicaciones',
        todasPublicaciones: todasPublicaciones
    });
});

router.post('/new', async function (req, res){
    var postInfo = req.body;

    var postNuevo = await new Post(postInfo);
    await postNuevo.save();

    res.send({
        message: 'POST de nueva publicación:',
        postNuevo: postNuevo
    });
});

router.put('/edit/:PostID', async function (req, res){
    var PostID = req.params.PostID;
    var datosPost = req.body;

    var post = await Post.findOne({PostID: PostID});
    post.content = datosPost.content;
    await post.save();

    res.send({
        message: 'PUT Actualización correctamente realizada en los datos de la publicación' + PostID,
        post: post
    });
});

router.get('/post/:PostID', function (req, res){
    var postID = req.params.PostID;
    res.send({
       message: 'GET Aquí PostID es un parámetro: ' + req.params.PostID
    });
});

router.delete('/deletePost', function (req, res){
   var PostID = req.body.PostID
   res.send({
    message: 'Este es el PostID el cual se borrará: ' + PostID,
   });
});

module.exports = router;