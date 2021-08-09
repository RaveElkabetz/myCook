const express = require('express');
const app = express();


// app.get(`/`, (req, res) => {
//     res.status(200)
//         .json({ message: `hello from server side`, app: `mycook` })

// })

// app.post(`/`,(req, res) => {
//     res.send(`you can post now here`);
// })

app.get('/api/v1/cooks', (req, res) => {
    

});  //the version is for branching out from the current version from the current version without braking v1 for others that use v1
                                           

const port = 3000;
app.listen(port, () => {
    console.log(`app running on port ${port}`);
});
