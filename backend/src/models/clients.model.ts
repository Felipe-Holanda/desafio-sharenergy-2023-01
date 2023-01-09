const mongoose = require('mongoose')

const Clients = mongoose.model('Clients', {
    name: String,
    email: String,
    phone: String,
    cpf: String,
    address: {
        street: String,
        number: String,
        complement: String,
        district: String,
        city: String,
        state: String,
        zipCode: String
    },
    createdAt: Date,
    updatedAt: Date,
    isActive: Boolean,
    uuidOwner: String
})

export default Clients;