const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxLength:150,
        unique: true
    },
    status:{
        // string with enum option validations {new, in-progress, done}
        type: String,
        enum: ['new', 'in-progress', 'done'],
        required: true
    },
    description: {
        type: String,
        maxLength:1000
    },
    dueDate: {
        type: Date,
        min: Date.now()
    }
}, {
    //options
    timestamps: true
}
);

const TodoModel = mongoose.model('Todo', todoSchema);

module.exports = TodoModel;