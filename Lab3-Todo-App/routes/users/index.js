const { userController } = require('../../controlers');

const router = require('express').Router();

router.post('/register', async (req, res, next) => {
    const { body } = req;

    try {
        const user = await userController.create(body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
});

router.post('/login', (req, res, next) => {
    res.status(201).json({
        msg: 'User Logged in'
    });
});

router.get('/:id', async (req, res, next) => {
    const { params } = req;

    try {
        const user = await userController.findById(params.id);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
});

router.get('/', async (req, res, next) => {

    try {
        const user = await userController.find();
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
});

router.patch('/:id', async (req, res, next) => {
    const { params, body } = req;

    try {
        const user = await userController.updateById(params.id, body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    const { params } = req;

    try {
        const user = await userController.deleteById(params.id);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
});

module.exports = router;