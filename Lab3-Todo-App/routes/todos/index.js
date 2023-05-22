const { next } = require('cli');

const router = require('express').Router();

router.post('/', (req, res, next) => {
    res.status(201).json({
        msg: 'Todo created'
    });
});

router.get('/:id', (req, res, next) => {
    res.status(201).json({
        msg: 'Find todo by id'
    });
});

router.get('/', (req, res, next) => {
    res.status(201).json({
        msg: 'Find all todos'
    });
});

router.patch('/:id', (req, res, next) => {
    res.status(201).json({
        msg: 'Updated one todo'
    });
});

router.delete('/:id', (req, res, next) => {
    res.status(201).json({
        msg: 'Deleted one todo'
    });
});


module.exports = router;