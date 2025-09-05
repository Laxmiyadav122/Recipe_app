const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
const UserModel = mongoose.model('User', UsserSchema);
module.exports = UserModel;