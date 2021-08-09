const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const app = express();


//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());


const cooks = JSON.parse(
    fs.readFileSync(`${__dirname}/data/mock-data/MOCK_DATA_RECIPES.json`)

);

//ROUTES HANDLING

const createNewCook = (req, res) => {
    //console.log(req.body);
    const newId = cooks[cooks.length - 1].id + 1;
    const newCook = Object.assign({ id: newId }, req.body);
    cooks.push(newCook);
    fs.writeFile(`${__dirname}/data/mock-data/MOCK_DATA_RECIPES.json`, JSON.stringify(cooks), err => {
        res.status(201).json({  //created status 201
            status: 'success',
            data: {
                //enveloping the data for security reasons
                cook: newCook
            }
        });
    });

};
const getAllCooks = (req, res) => { //the version is for branching out from the current version from the current version without braking v1 for others that use v1
    res.status(200).json(
        {
            status: 'success',
            results: cooks.length,
            data: {
                cooks
            }
        }
    )
};
const getCookById = (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1;
    const cook = cooks.find(el => el.id === id)
    if (!cook) {
        return res.status(404).json({
            status: 'failed',
            message: 'Invalid id'
        });
    }
    res.status(200).json(
        {
            status: 'success',
            data: {
                cook
            }
        }
    )
}

const getAllUsers = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'this rout not yet defined'
    })
}

const createUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'this rout not yet defined'
    })
}

const getUserById = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'this rout not yet defined'
    })
}

const updateUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'this rout not yet defined'
    })
}

const deleteUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'this rout not yet defined'
    })
};



// ROUTES
const cooksRouter = express.Router();
const userRouter = express.Router();

cooksRouter
    .route('/')  //the version is for branching out from the current version from the current version without braking v1 for others that use v1
    .get(getAllCooks)
    .post(createNewCook);
cooksRouter
    .route('/:id')
    .get(getCookById);

userRouter
    .route('/')
    .get(getAllUsers)
    .post(createUser)
userRouter
    .route('/:id')
    .get(getUserById)
    .patch(updateUser)
    .delete(deleteUser);

app.use('/api/v1/cooks',cooksRouter);
app.use('/api/v1/users',userRouter);
//app.get('/api/v1/cooks', getAllCooks);
//app.get('/api/v1/cooks/:id', getCookById);

//app.post(`/api/v1/cooks`,createNewCook);



//START THE SERVER
const port = 3000;
app.listen(port, () => {
    console.log(`app running on port ${port}`);
});
