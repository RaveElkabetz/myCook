const express = require("express");
const authJwt = require("../middlewares/authJwt");
const usersController = require("../controllers/usersController");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", usersController.allAccess);
  
  app.get("/api/test/user", authJwt.verifyToken, usersController.userBoard);


const router = express.Router();

router
  .route("/")
  .get(usersController.getAllUsers);
router
  .route("/:id")
  .delete(usersController.deleteUser, router);

}

//module.exports = router;