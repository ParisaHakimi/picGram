const UserController = require("../controllers/user.controller");
module.exports = (app) => {
  // app.get("/api/allusers", UserController.showAllUser);
  // app.get("/api/user/:id", UserController.showOneUser);
  // app.put("/api/editUser/:id", UserController.editExistingUser);
  // app.post("/api/addUser", UserController.createNewUser);
  // app.delete("/api/deleteUser/:id", UserController.deleteExistingUser);
  app.post("/api/register", UserController.registerUser);
  app.post("/login", UserController.loginUser);
  // app.get("/getLoggedUser", UserController.getLoggedUser);
  //   app.get("/logout", UserController.logoutUser);
};
