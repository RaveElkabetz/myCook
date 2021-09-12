const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/AuthController");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/OurProject/test/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail
    ],
    controller.signup
  ); 

  app.post("/OurProject/test/signin", controller.signin);
};