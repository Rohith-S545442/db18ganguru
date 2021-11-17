var express = require('express');
const camera_controlers = require('../controllers/camera');
var router = express.Router();

/* GET camera */
router.get('/', camera_controlers.camera_view_all_Page);
module.exports = router;

// GET request for one costume.
router.get('/camera/:id', camera_controlers.camera_detail);

/* GET detail camera page */
router.get('/detail', camera_controlers.camera_view_one_Page);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('camera', { title: 'Search Results Camera' });
});

module.exports = router;
