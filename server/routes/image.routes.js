// destructuring from image controllers
const {
  showAllImage,
  showOneImage,
  editExistingImage,
  createNewImage,
  deleteExistingImage,
} = require("../controllers/image.controller");
module.exports = (app) => {
  app.get("/api/allImages", showAllImage);
  app.get("/api/image/:id", showOneImage);
  app.put("/api/editImage/:id", editExistingImage);
  app.post("/api/addImage", createNewImage);
  app.delete("/api/deleteImage/:id", deleteExistingImage);
};
