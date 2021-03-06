'use strict'

const router = require('express').Router();
const multer = require( 'multer' );
const upload = multer({ dest: 'app/views/uploads/' }).single('upfile');

router.post('/api/fileanalyse', ( req, res ) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      res.send('<h1 style="color: red; font-style: italic; font-size: 2rem; font-family: Verdana serif">A Multer error occurred when uploading</h1>')
    } else if (err) {
      res.send('<h1 style="color: red; font-style: italic; font-size: 2rem; font-family: Verdana serif">An unknown error occurred when uploading</h1>')
      // An unknown error occurred when uploading.
    } else {
      res.json({
       name : req.file.originalname,
       type : req.file.mimetype,
       size : req.file.size,
       encoding: req.file.encoding
      });
    // Everything went fine.
    }
  })
});

router.get("/*", (req, res) => {
  res.send('<h1 style="color: red; font-style: italic; font-size: 2rem; font-family: Verdana serif">Nothing to see here!</h1>')
})

module.exports = router