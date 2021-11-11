const mongoose = require("mongoose")
const cameraSchema = mongoose.Schema({
  cName: String,
  cPixels: String,
  cCost  : Number
})
module.exports = mongoose.model("Camera",
    cameraSchema)