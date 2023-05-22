//Applicattion Entry point
const { next } = require('cli');
const express = require('express');
const app = express();
const path = require('path');
const { usersRouter, todosRouter } = require('./routes');

app.use(express.json)

//Middleware handles static files
app.use(express.static(path.join(__dirname, './public')));

app.use('/users', usersRouter);
app.use('/todos', todosRouter);

/*
 * Code Logic
 */


//Middleware matches any http method
app.all('*', (req, res, next) => {
    res.status(404).json({
        error: 'Resource not found'
    });
});

app.use((err, req, res, next) => {
    res.status(500).json({
        error: 'Server error'
    });
});

app.listen(3000, () => {
    console.log('App is running on http://localhost:3000');
});