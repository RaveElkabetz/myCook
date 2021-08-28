const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app"); // replaced the order with dotenv if have any problems
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config({ path: "./config.env" });

var corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./Client/models");


mongoose
  .connect('mongodb://localhost:=27017/Users', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("db connected!");
  });

  app.get("/", (req, res) => {
    res.json({ message: "Welcome to our application." });
  });
  
  // routes
 require("./Client/routes/authRoutes")(app);
 require("./Client/routes/usersRoutes")(app);

//START THE SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
