require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

//Initializations
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//Routes
app.use('/API/v1', require('./src/routes/employees'));
app.use('/API/v1', require('./src/routes/telephones'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Served on port ${app.get('port')}`)
})