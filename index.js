const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require('./config/conexiondb');
const postulantesRouter = require('./controllers/postulantesController');
const vacantesRouter = require('./controllers/vacantesController');
const postulacionesRouter = require('./controllers/postulacionesController');

const usuariosRouter = require ('./controllers/userController');
const bodyParser = require('body-parser');
const propuestaRoutes = require('./routes/propuestaRoutes');
const path = require('path'); // Asegúrate de importar path
//----------------------------------------------------------------------------------------------------
const authRoutes = require('./routes/authRoutes');
//----------------------------------------------------------------------------------------------------



// Middleware
app.use(express.json());


app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.options('*', cors()); // Permitir preflight

//----------------------------------------------------------------------------------------------------

app.use(bodyParser.json()); // Para parsear el cuerpo de las solicitudes JSON
app.use('/api/auth', authRoutes);


//----------------------------------------------------------------------------------------------------

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/propuestas', propuestaRoutes);
// Rutas para Usuarios
app.use('/api/users', usuariosRouter);
// Rutas para Postulantes
app.use('/api/postulantes', postulantesRouter); // Las rutas comenzarán con /api/..

//Rutas para Vacantes
app.use('/api/vacantes', vacantesRouter);

//Rutas para Postulaciones
app.use('/api/postulaciones', postulacionesRouter);




// conexion bd-----------------------------------
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
})();
// conexion bd-----------------------------------


//para unir el back con el front
// app.use(cors({
//   origin: 'http://localhost:4200'
// }));

//para saber si el back esta conectado con el front y escuchar por el puerto 4200
app.get('/api/data', (req, res) => {
  res.json({ message: 'conectado con exito desde el backend' });
});

//conexion del puerto 300 hacia 4200
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



