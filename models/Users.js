const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String
    }
    // unique
    //required
    //trimmed
});

const User = model('User', UserSchema);

module.exports = User;