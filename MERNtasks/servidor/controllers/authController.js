const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

exports.autenticarUsuario = async (req, res) => {
    // Revisar si hay errores
    const errores = validationResult(req)
    if( !errores.isEmpty() ){
        return res.status(400).json({ errores: errores.array() })
    }
    
    // extraer el email y password
    const { email, password } = req.body;
    
    try {
        // Revisar que sea usuario registrado
        let usuario = await Usuario.findOne({ email })
        if(!usuario) {
            return res.status(400).json({ msg: 'El usuario no existe' })
        }
        // Revisar el password
        const passCorrecto = await bcrypt.compare(password, usuario.password)
        if(!passCorrecto){
            return res.status(400).json({ msg: 'Password incorrecto' })
        }
        
        // Si todo es correcto creamos JWT
        // JSON WEB TOKEN : crear y firmar
        const payload = {
          usuario: {
              id: usuario.id
          }
        }
        // firmar JWT
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 18000 // 1 hora
        }, (error, token) => {
            if(error) throw error;
            // Mensaje de confirmación
            res.json({ token })
        })
    
      } catch (error) {
        console.log(error)
    }
}