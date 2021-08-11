const express = require("express");

const usersController = require("./../controllers/usersController");

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
