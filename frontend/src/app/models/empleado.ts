export class Empleado {
    constructor (_id ='', name = '', puesto = '', sueldo = 0 ) {
        this._id = _id;
        this.name = name;
        this.puesto = puesto;
        this.sueldo = sueldo;

    }
    _id: string;
    name: string;
    puesto: string;
    sueldo: number;
}

