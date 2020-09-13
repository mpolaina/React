const express = require('express')
const router = express.Router()
const tareaController = require('../controllers/tareaController')
const auth = require('../middleware/auth')
const { check } = require('express-validator')

// CREAR TAREA
// api/tareas
router.post('/',
    auth,
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('proyecto', 'El proyecto es obligatorio').not().isEmpty()
    ],
    tareaController.crearTarea
)

// OBTENER TAREAS DE PROYECTO
// api/tareas
router.get('/',
    auth,
    tareaController.obtenerTareas
)

// ACTUALIZAR TAREA
router.put('/:id',
    auth,
    tareaController.actualizarTarea
)

// ELIMINAR TAREA
router.delete('/:id',
    auth,
    tareaController.eliminarTarea
)

module.exports = router; 