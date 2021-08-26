const express = require("express");
const { authJwt } = require("../middlewares");
const usersController = require("./../controllers/usersController");


app.get("/api/test/all", usersController.allAccess);

app.get("/api/test/user", [authJwt.verifyToken], usersController.userBoard);

const router = express.Router();

router
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.createUser);
router
  .route("/:id")
  .get(usersController.getUserById)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser, router);

module.exports = router;
