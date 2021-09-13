const Cook = require("../models/cookModel");

// const cooks = JSON.parse(
//   fs.readFileSync(`${__dirname}/../data/mock-data/MOCK_DATA_RECIPES.json`)
// );

exports.createNewCook = async (req, res) => {
  try {
    const newCook = await Cook.create(req.body);

    res.status(201).json({
      //created status 201
      status: "success",
      data: {
        //enveloping the data for security reasons
        cook: newCook,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
  // const newCook = new Cook({});
  // newCook.save();
};
exports.getAllCooks = async (req, res) => {
  try {
    const cooks = await Cook.find();
    res.status(200).json({
      status: "success",
      results: cooks.length,
      data: {
        cooks,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.getCookById = async (req, res) => {
  try {
    const cook = await Cook.findById(req.params.id);
    //findById is mongoose helper method to replace the regular query of mongo:
    // Cook.findOne({ _id: req.params.id })

    res.status(200).json({
      status: "success",
      data: {
        cook,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};
