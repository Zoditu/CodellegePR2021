const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    var body = req.body.query
    var search = {
        search: true,
        query: body
    }

    res.send(search)
})

module.exports = router;