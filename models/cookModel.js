const mongoose = require("mongoose");
const cookSchema = new mongoose.Schema({
  cookName: {
    type: String,
    required: [true, "A cook name must be provided"],
    unique: false,
  },
  ingredients: [
    {
      type: String,
    },
  ],
  fullRecipeDesc: {
    type: String,
    required: [false, "a fullRecipeDesc must be provided"],
  },
  imageLink: {
    type: String,
    default:
      "https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/2020/03/04123229/%D7%AA%D7%91%D7%A9%D7%99%D7%9C-Small.jpg",
  },

  category: {
    type: String,
    required: [true, "A recipe category must be provided"],
  },
  email: {
    type: String,
    required: [true, "a recipe creator email must be provided"],
    unique: true,
  },
});

const Cook = mongoose.model("Cook", cookSchema);

module.exports = Cook;
