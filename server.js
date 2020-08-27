require('dotenv').config()
const express = require('express');
const morgan = require('morgan');

//Initializations
const app = express();

//settings
app.set('port', process.env.PORT);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/API/v1', require('./src/routes/employees'));
app.use('/API/v1', require('./src/routes/telephones'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Served on port ${app.get('port')}`)
})