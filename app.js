/* eslint-disable no-undef */
const express = require("express");
const morgan = require("morgan");
// const cors = require("cors");

const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

cooksRouter = require("./routes/cooksRoutes");
userRouter = require("./routes/usersRoutes");

//MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
// app.use(cors());

// ROUTES
//the version is for branching out from the current version from the current version without braking v1 for others that use v1
app.use("/api/v1/users", userRouter);
app.use("/api/v1/cooks", cooksRouter);

module.exports = app;
