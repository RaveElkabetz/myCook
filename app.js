const express = require('express');
const morgan = require('morgan');
const app = express();

cooksRouter = require('./routes/cooksRoutes')
userRouter = require('./routes/usersRoutes')


//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());









// ROUTES
app.use('/api/v1/users',userRouter);
app.use('/api/v1/cooks', cooksRouter);


//app.get('/api/v1/cooks', getAllCooks);
//app.get('/api/v1/cooks/:id', getCookById);

//app.post(`/api/v1/cooks`,createNewCook);



//START THE SERVER
const port = 3000;
app.listen(port, () => {
    console.log(`app running on port ${port}`);
});
