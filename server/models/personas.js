const mongoose = require('mongoose');

const { Schema } = mongoose;


 const EsquemaDeEmpleados =  new Schema({
    name: {type: String, require:true},
    puesto: {type: String, require:true},
    sueldo:{ type: Number, require:true},
});

module.exports = mongoose.model('empleados', EsquemaDeEmpleados)
// importamos el modulo par poder usarlo y pasamos el modelo de datos a mongodb le damos el nombre con el que sera guardado sera este(empleados) y el modelo de datos sera (EsquemaDeEmpleados)//