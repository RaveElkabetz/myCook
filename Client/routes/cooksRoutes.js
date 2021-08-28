const fs = require("fs");

const express = require("express");
const cooksController = require("../controllers/cooksController");

const router = express.Router();

// router.param("id", cooksController.checkId);

router
  .route("/") //the version is for branching out from the current version from the current version without braking v1 for others that use v1
  .get(cooksController.getAllCooks)
  .post(cooksController.createNewCook);
router.route("/:id").get(cooksController.getCookById);

module.exports = router;
