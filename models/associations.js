const Vacantes = require('./models/Vacantes');
const Postulantes = require('./models/Postulantes');
const Postulaciones = require('./models/Postulaciones');

// Relaciones
Postulaciones.belongsTo(Vacantes, { foreignKey: 'vacante_id' });
Postulaciones.belongsTo(Postulantes, { foreignKey: 'postulante_id' });
Vacantes.hasMany(Postulaciones, { foreignKey: 'vacante_id' });
Postulantes.hasMany(Postulaciones, { foreignKey: 'postulante_id' });

module.exports = { Vacantes, Postulantes, Postulaciones };
