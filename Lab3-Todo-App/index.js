//Applicattion Entry point

const express = require('express');

const app = express();
const path = require('path');

const { usersRouter, todosRouter } = require('./routes');

require('./models');
require('dotenv').config();

// Call express.json()
app.use(express.json());

const connectDB = require('./db');

//Middleware handles static files
app.use(express.static(path.join(__dirname, './public')));

app.use('/users', usersRouter);
app.use('/todos', todosRouter);


// console.log(process.env);

/*
 * Code Logic
 */


//Middleware matches any http method
app.all('*', (req, res, next) => {
    res.status(404).json({
        error: 'Resource not found'
    });
    next();
});

app.use((err, req, res, next) => {
    res.status(500).json({
        msg: 'Server error',
        error: err
    });
});

connectDB()
    .then(
        () => {
            app.listen(process.env.PORT, () => {
                console.log(`App is running on ${process.env.PORT}`);
            });
        }
    )
    .catch(
        () => process.exit(1)
    );