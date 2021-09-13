const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app"); // replaced the order with dotenv if have any problems
// const Cook = require("./models/cookModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("db connected!");
  });

// const testCook = new Cook({
//   cookName: " אורז פרסי",
//   ingredients: ["שמן", "אורז", "מים", "מלח"],
//   fullRecipeDesc: "להכין הכל יחד",
//   imageLink:
//     "https://static01.nyt.com/images/2018/02/21/dining/00RICEGUIDE8/00RICEGUIDE8-articleLarge.jpg",
//   category: "אוכל אסייתי",
//   email: "test@test.com",
// });
// testCook
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log("Error! :", err);
//   });

//START THE SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
