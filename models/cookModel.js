const mongoose = require("mongoose");
const cookSchema = new mongoose.Schema({
  cook_name: {
    type: String,
    required: [true, "A cook name must be provided"],
    unique: true,
  },
  ingredients: Array,
  full_recipe_desc: {
    type: String,
    required: [true, "a full_recipe_desc must be provided"],
  },
});

const Cook = mongoose.model("Cook", cookSchema);

module.exports = Cook;
//   const testCook = new Cook({
//     cook_name: "rice",
//     ingredients: ["rice", "fresh water", "salt"],
//     full_recipe_desc: "just cook it all together for 20 minutes",
//   });

//Omer Homo