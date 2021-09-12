const Cook = require("./../models/cookModel");

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

exports.getCookByUser = async (req, res) => {
  try {

    const cook = await Cook.findOne({email: req.body.email});

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
exports.getAllCooksByUser = async (req, res) => {
  try {

    const user = await fetch("/api/test/user", {
      method: 'get',
      headers: {'x-access-token': req.body.token}
    });
    const useremail = user.email 
    const cook = await Cook.find({email: useremail});

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
exports.getCookByCategory = async (req, res) => {
  try {
    const cook = await Cook.find({category: req.body.cayrgory});

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
exports.updateCook = async (req, res) => {
  try {
    const data = await Cook.updateOne({cook_name : req.body.cook_name}, req.body);
    if (data.nModified != 0)
    {
      res.status(200).json({
        status: "success",
        data: data
      });
    }
    else 
    {
      res.status(404).json({
        status: "failed",
        message: "no such cook"
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }

}

exports.deleteCook = async (req, res) => {

  try {
    const deleteCook = await Cook.findOneAndDelete({cook_name : req.body.cook_name});
    if (deleteCook != null)
    {
      res.status(200).json({
        status: "success",
        data: {
          cook: deleteCook,
        },
      });
    }
    else
    {
      res.status(404).json({
        status: "failed",
        message: "no such cook"
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
}