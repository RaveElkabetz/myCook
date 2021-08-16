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
      message: err,
    });
  }
  // const newCook = new Cook({});
  // newCook.save();
};
exports.getAllCooks = (req, res) => {
  //the version is for branching out from the current version from the current version without braking v1 for others that use v1
  res.status(200).json({
    status: "success",
    // results: cooks.length,
    // data: {
    //   cooks,
  });
};

exports.getCookById = (req, res) => {
  console.log(req.params);
  //const id = req.params.id * 1;
  //const cook = cooks.find((el) => el.id === id);
  res.status(200).json({
    status: "success",
    data: {
      cook,
    },
  });
};
