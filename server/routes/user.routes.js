const UserController = require("../controllers/user.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  // CRUD commands
  app.get("/api/allusers", UserController.showAllUser);
  app.put("/api/editUser/:id", UserController.editExistingUser);
  app.delete("/api/deleteUser/:id", UserController.deleteExistingUser);

  // log and reg commands
  app.post("/api/register", UserController.registerUser); // create a user
  app.post("/api/login", UserController.loginUser); //find a user
  app.get("/api/getLoggedUser", UserController.getLoggedUser); //get a user by id
  app.get("/api/logout", UserController.logoutUser);
};
