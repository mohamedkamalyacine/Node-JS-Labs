const { User } = require('../../models');

const create = (user) => User.create(user);
const find = () => User.find();
const findById = (id) => UserModel.findById(id);
const updateById = (id, update) => UserModel.findByIdAndUpdate(id, update, { new: true });
const deleteById = (id) => UserModel.findOneAndDelete(id);

module.exports = {
    create,
    find,
    findById,
    updateById,
    deleteById,
}