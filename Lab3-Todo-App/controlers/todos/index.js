const {Todo} = require('../../models');
const TodoModel = require('../../models/todos');

const create = (todo) => Todo.create({...todo, status: 'new'});
const find = () => Todo.find();
const findById = (id) => TodoModel.findById(id);
const updateById = (id, update) => TodoModel.findByIdAndUpdate(id, update, { new: true });
const deleteById = (id) => TodoModel.findOneAndDelete(id);

module.exports = {
    create,
    find,
    findById,
    updateById,
    deleteById,
}