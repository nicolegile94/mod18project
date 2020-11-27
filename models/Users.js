const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        //must match a valid email address
    }
   //thoughts integration,
   //friends integration
});

const User = model('User', UserSchema);

module.exports = User;