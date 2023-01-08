const mongoose = require('mongoose')

const User = mongoose.model('User', {
    uuid: String,
    username: String,
    email: String,
    password: String,
    createdAt: Date,
    updatedAt: Date,
    isActive: Boolean,
    isAdmin: Boolean
})

export default User;