const router = require('express').Router();
const { todoController } = require('../../controlers')

router.post('/', async (req, res, next) => {
    const { body } = req;

    try {
        console.log("OK");
        //calls controller
        const todo  = await todoController.create(body);
        //return response and json object of todo
        res.status(201).json(todo);
    } catch(error) {
        next(error);
    }
});

//get Todo by Id
router.get('/:id', async (req, res, next) => {

    const {params} = req;

    try {
        const todo = await todoController.findById(params.id);
        res.status(201).json(todo);
    } catch (error) {
        next(error);
    }

});

//find all todos
router.get('/', async (req, res, next) => {

    try {
        const results = await todoController.find();
        res.status(201).json(results);
    } catch (error) {
        next(error);
    }

});

router.patch('/:id', async (req, res, next) => {
    const { params, body}  = req;

    try {
        const todo = await todoController.updateById(params.id, body);
        res.status(201).json(todo);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    const { params } = req;
    
    try {
        const results = await todoController.deleteById(params.id);
        res.status(201).json(results);
    } catch (error) {
        next(error);
    }
});


module.exports = router;