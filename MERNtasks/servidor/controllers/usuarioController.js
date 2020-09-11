const Usuario = require('../models/Usuario')
exports.crearUsuario = async (req, res) => {
    
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
        //guardar usuario
        await usuario.save()
        
        // Mensaje de confirmación
        res.json({ msg: 'Usuario creado correctamente' })
        
    } catch (error) {
        console.log(error)
        res.status(400).send('Hubo un error')
    }
    
}