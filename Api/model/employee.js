const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

},{timestamps:true})

const employeemodel = new mongoose.model('employee', employeeSchema)
module.exports = employeemodel;