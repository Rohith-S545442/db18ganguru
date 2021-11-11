var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var camera_controller = require('../controllers/camera');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// Camera ROUTES ///
// POST request for creating a camera.
router.post('/resource/camera', camera_controller.camera_create_post);
// DELETE request to delete camera.
router.delete('/resource/camera/:id', camera_controller.camera_delete);
// PUT request to update camera.
router.put('/resource/camera/:id', camera_controller.camera_update_put);
// GET request for one camera.
router.get('/resource/camera/:id', camera_controller.camera_detail);
// GET request for list of all camera items.
router.get('/resource/camera', camera_controller.camera_list);
module.exports = router;