

exports.getAllUsers = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'this rout not yet defined'
    })
}

exports.createUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'this rout not yet defined'
    })
}

exports.getUserById = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'this rout not yet defined'
    })
}

exports.updateUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'this rout not yet defined'
    })
}

exports.deleteUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'this rout not yet defined'
    })
};

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
exports.userBoard = (req, res) => {
res.status(200).send("User Content.");
};