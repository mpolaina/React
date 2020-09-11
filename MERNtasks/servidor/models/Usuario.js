const mongoose = require('mongoose')

const UsuariosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true // elimina espacios
    },
    email: {
        type: String,
        required: true,
        trim: true, // elimina espacios
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true // elimina espacios
    },
    registro: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Usuario', UsuariosSchema)