const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

exports.crearUsuario = async (req, res) => {
    
    // Revisar si hay errores
    const errores = validationResult(req)
    if( !errores.isEmpty() ){
        return res.status(400).json({ errores: errores.array() })
    }
  
    // Extraer email y password
    const { email, password } = req.body;
    
    try {
        // Validar que el usuario sea único    
        let usuario = await Usuario.findOne({ email })
        
        if(usuario) {
          return res.status(400).json({ msg: 'El usuario ya existe' })
        }        
        
        // crea nuevo usuario
        usuario = new Usuario(req.body)
        
        // Hashear el password
        const salt = await bcrypt.genSalt(10)
        usuario.password = await bcrypt.hash(password, salt)
        
        //guardar usuario
        await usuario.save()
        
        // JSON WEB TOKEN : crear y firmar
        const payload = {
            usuario: {
                id: usuario.id
            }
        }
        // firmar JWT
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600 // 1 hora
        }, (error, token) => {
            if(error) throw error;
            // Mensaje de confirmación
            res.json({ token })
        })
        
        
    } catch (error) {
        console.log(error)
        res.status(400).send('Hubo un error')
    }
    
}