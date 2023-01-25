export class Usuario{


  constructor(nombre: String, apellido: String, rol: String, edad: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.rol = rol;
    this.edad = edad;
  }

  nombre:String="";
  apellido:String="";
  rol:String="";
  edad:number=0;

}
