require('dotenv').config({ path: './.env' });
const express = require('express');
const path = require('path');
require('./connect/mongoose');
const cors = require("cors");
const userRoutes = require('./routes/userRoutes')



const app = express();

const port = process.env.PORT || 8001

app.use(express.json());
app.use(cors())
app.use('/user',userRoutes)

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({
        status: status,
        message:message
    })
    console.log(status);
});

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})