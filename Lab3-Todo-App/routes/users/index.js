const { next } = require('cli');

const router = require('express').Router();

router.post('/register', (req, res, next) => {
    res.status(201).json({
        msg: 'User Registered'
    });
});

router.post('/login', (req, res, next) => {
    res.status(201).json({
        msg: 'User Logged in'
    });
});

router.get('/:id', (req, res, next) => {
    res.status(201).json({
        msg: 'Find user by id'
    });
});

router.get('/', (req, res, next) => {
    res.status(201).json({
        msg: 'Find all users'
    });
});

router.patch('/:id', (req, res, next) => {
    res.status(201).json({
        msg: 'Updated one user'
    });
});

router.delete('/:id', (req, res, next) => {
    res.status(201).json({
        msg: 'Deleted one user'
    });
});

module.exports = router;