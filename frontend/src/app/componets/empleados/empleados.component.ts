import { Component, OnInit } from '@angular/core';


import { EmpleadoService } from '../../services/empleado.service';
import { NgForm } from '@angular/forms';
import { Empleado } from '../../models/empleado';

// con esta variable hacemos que salga el mensaje//
declare var M: any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers:[EmpleadoService]
})
export class EmpleadosComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.getEmpledos();
  }
//le damos las funcionalidad alos botones//

addEmpleado(form:NgForm) {
  if(form.value._id){
    this.empleadoService.putEmpleado(form.value)
    .subscribe(res => {
      this.resetForm(form);
      M.toast({html:'Empleado Actualizado'})
      this.getEmpledos();
     
    })
  } else{
    this.empleadoService.postEmpleado(form.value)
  .subscribe(res => {
    this.resetForm(form);
    //mesaje de flotante
    M.toast({html:'Empleado Guardado'})
    this.getEmpledos();

  });

  }

}


getEmpledos() {
  this.empleadoService.getEmpleados()
  .subscribe(res  =>{
    this.empleadoService.empleados = res as Empleado[];
    console.log(res);
  })

}


editEmpleado(empleado: Empleado) {
  this.empleadoService.selectedEmpleado = empleado;
}

deleteEmpleado(_id: string) {
  if(confirm('Eliminar EMPLEADO!!!!'))
  this.empleadoService.deleteEmpleado(_id)
  .subscribe( res => {
    this.getEmpledos();
    M.toast({html:'Empleado Eliminado'})

  });
}

  



resetForm(form?:NgForm) {
    if(form){
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
    }

  }

}
