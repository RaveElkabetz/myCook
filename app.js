/* eslint-disable no-undef */
const express = require("express");
const morgan = require("morgan");

const app = express();

cooksRouter = require("./routes/cooksRoutes");
userRouter = require("./routes/usersRoutes");

//MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

// ROUTES
app.use("/api/v1/users", userRouter);
app.use("/api/v1/cooks", cooksRouter);

module.exports = app;
