const sequelize = require('./config/conexiondb'); // Importa la conexión a la base de datos
const AdminRH = require('./models/AdminRh');
const Postulantes = require('./models/Postulantes');
const Vacantes = require('./models/Vacantes');
const Postulaciones = require('./models/Postulaciones');
require('./models/associations'); // Importa las asociaciones para configurar las relaciones

(async () => {
  try {
    // Verifica la conexión
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente.');

    // Sincroniza los modelos con la base de datos
    await sequelize.sync({ force: true }); // ¡Cuidado! Esto elimina y recrea las tablas
    console.log('Modelos sincronizados correctamente con la base de datos.');
  } catch (error) {
    console.error('Error al sincronizar los modelos:', error);
  } finally {
    // Cierra la conexión
    await sequelize.close();
    console.log('Conexión cerrada.');
  }
})();

