// Rutas para crear usuarios
const express = require('express')
const router = express.Router()
const proyectoController = require('../controllers/proyectoController')
const auth = require('../middleware/auth')
const { check } = require('express-validator')

// CREAR UN PROYECTO
// api/proyectos
router.post('/',
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.crearProyecto
)

// OBTENER (GET) PROYECTOS
router.get('/',
    auth,
    proyectoController.obtenerProyectos
)

// ACTUALIZAR PROYECTOS POR ID
router.put('/:id',
    auth,
    [
      check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.actualizarProyecto
)

// ELIMINAR UN PROYECTO
router.delete('/:id',
      auth,
      proyectoController.eliminarProyecto
)

module.exports = router;