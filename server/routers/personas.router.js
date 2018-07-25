const express = require('express');
const Router = express.Router();

 const empleado = require('../controllers/control.empleados');


Router.get('/' ,empleado.getEmpleados);

Router.post('/' , empleado.createEmpleado);

Router.get('/:id' , empleado.getEmpleado);

Router.put('/:id' , empleado.editEmpleado);

Router.delete('/:id' , empleado.deleteEmplado);





module.exports = Router;