/* eslint-disable no-undef */
const express = require("express");
const morgan = require("morgan");

const app = express();

cooksRouter = require("../myCook/routes/cooksRoutes");
userRouter = require("../myCook/routes/usersRoutes");

//MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

// ROUTES
//the version is for branching out from the current version from the current version without braking v1 for others that use v1
app.use("/api/v1/users", userRouter);
app.use("/api/v1/cooks", cooksRouter);

module.exports = app;
