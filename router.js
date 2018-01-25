const express = require('express');
const multer = require('multer');
const sort = require('./sort');

const router = express.Router();
const upload = multer();

router.post('/sort', upload.fields([]), (req, res) => {
    res.json(sort(req.body.unsortedStr));
});

module.exports = router;