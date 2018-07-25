 const empleados = require('../models/personas')
const empleadoCtrl = {};

empleadoCtrl.getEmpleados =  async (req, res) => {
    const empleado = await empleados.find();
    res.json(empleado);

}

empleadoCtrl.createEmpleado = async (req, res) => {
     const empleado = new empleados({
         name: req.body.name,
         puesto: req.body.puesto,
         sueldo: req.body.sueldo
     });
     await empleado.save();
    res.json({
        'status': 'empleado guardado'
    });


}


empleadoCtrl.getEmpleado =  async (req, res)  => {
     const empleado = await empleados.findById(req.params.id);

    res.json(empleado);

}


empleadoCtrl.editEmpleado = async (req, res, next) => {
    const { id } = req.params;
   
    const empleado = {
        name:req.body.name,
        puesto:req.body.puesto,
        sueldo: req.body.sueldo

    };
     await empleados.findByIdAndUpdate(id, {$set:empleado}, {new:true});
     
     res.json({status:'empleado actualizado'});

};

empleadoCtrl.deleteEmplado = async (req, res) => {
    await empleados.findByIdAndRemove(req.params.id)
    res.json({ estatus:'usuario eliminado'});


}



module.exports = empleadoCtrl;