// CONEXIÓN A LA BD Y CONFIGURACIÓN GENERAL DE MONGOOSE
const express = require('express');
const conectarDB = require('./config/db')

// crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB()

// Habilitar express.json
app.use( express.json({ extended: true }) )

// puerto de la app
const PORT = process.env.PORT || 4000;

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/proyectos', require('./routes/proyectos'))
app.use('/api/tareas', require('./routes/tareas'))

//arrancar la app
app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`)
})