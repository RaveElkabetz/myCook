const User = require("../models/UserModel");

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
exports.userBoard = async (req, res) => {
    try{
    var usera= await User.findById(req.userId);
    res.status(200).send(usera);
    } catch(err){
        res.status(404).json({
            status: "failed",
            message: err.message,
          });
    }
};