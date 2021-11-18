var Camera = require('../models/camera');
// List of all Cameras
exports.camera_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Camera list');
};
// for a specific Camera.
exports.camera_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Camera detail: ' + req.params.id);
};
// Handle Camera create on POST.
exports.camera_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Camera();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"cName":"Nike", "cPixels":"240p", "cCost":500}
    document.cName = req.body.cName;
    document.cPixels = req.body.cPixels;
    document.cCost = req.body.cCost;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Camera delete form on DELETE.
exports.camera_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Camera delete DELETE ' + req.params.id);
};
// Handle Camera update form on PUT.
exports.camera_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Camera update PUT' + req.params.id);
};

// List of all Cameras
exports.camera_list = async function (req, res) {
    try {
        theCamera = await Camera.find();
        res.send(theCamera);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.camera_view_all_Page = async function (req, res) {
    try {
        theCamera = await Camera.find();
        res.render('camera', {
            title: 'Camera Search Results',
            results: theCamera
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Camera.
exports.camera_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Camera.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Camera update form on PUT.
exports.camera_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Camera.findById(req.params.id)
        // Do updates of properties
        if (req.body.cName)
            toUpdate.cName = req.body.cName;
        if (req.body.cPixels) toUpdate.cPixels = req.body.cPixels;
        if (req.body.cCost) toUpdate.cCost = req.body.cCost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

// Handle Camera delete on DELETE.
exports.camera_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Camera.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.camera_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Camera.findById(req.query.id)
        res.render('cameradetail',
            { title: 'Camera Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a camera.
// No body, no in path parameter, no query.
// Does not need to be async
exports.camera_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('cameracreate', { title: 'Camera Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a camera.
// query provides the id
exports.camera_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Camera.findById(req.query.id)
        res.render('cameraupdate', { title: 'Camera Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.camera_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Camera.findById(req.query.id)
        res.render('cameradelete', {
            title: 'Camera Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

