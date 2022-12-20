// destructuring from image controllers
const {
  showAllImage,
  showOneImage,
  editExistingImage,
  // createNewImage,
  uploadFile,
  deleteExistingImage,
} = require("../controllers/image.controller");
// const {authenticate}=require('../config/jwt.config')
// authenticate: if there is no jsonwebtoken in cookies then we're not gonna let anybody hit these routes
module.exports = (app) => {
  app.get("/api/allImages",showAllImage);
  app.get("/api/image/:id",showOneImage);
  app.put("/api/editImage/:id",editExistingImage);
  // app.post("/api/addImage", createNewImage);
  app.post("/api/uploadPost",   uploadFile,
  );
  app.delete("/api/deleteImage/:id",deleteExistingImage);
};
