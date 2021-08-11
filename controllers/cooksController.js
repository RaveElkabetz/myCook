const fs = require("fs");

const cooks = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/mock-data/MOCK_DATA_RECIPES.json`)
);
exports.checkId = (req, res, next, val) => {
  console.log(`cook id is ${val}`);

  if (req.params.id * 1 > cooks.length) {
    return res.status(404).json({
      status: "failed",
      message: "Invalid id",
    });
  }
  next();
};

exports.createNewCook = (req, res) => {
  //console.log(req.body);
  const newId = cooks[cooks.length - 1].id + 1;
  const newCook = Object.assign({ id: newId }, req.body);
  cooks.push(newCook);
  fs.writeFile(
    `${__dirname}/data/mock-data/MOCK_DATA_RECIPES.json`,
    JSON.stringify(cooks),
    (err) => {
      res.status(201).json({
        //created status 201
        status: "success",
        data: {
          //enveloping the data for security reasons
          cook: newCook,
        },
      });
    }
  );
};
exports.getAllCooks = (req, res) => {
  //the version is for branching out from the current version from the current version without braking v1 for others that use v1
  res.status(200).json({
    status: "success",
    results: cooks.length,
    data: {
      cooks,
    },
  });
};
exports.getCookById = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  const cook = cooks.find((el) => el.id === id);
  res.status(200).json({
    status: "success",
    data: {
      cook,
    },
  });
};
