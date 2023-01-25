import {Usuario} from "./usuario.model";
import {DataServices} from "./data.services";
import {Injectable} from "@angular/core";

@Injectable()
export class UsuarioService{ //22

  constructor(private dataService:DataServices) {
  }

  setUsuarios(misUsuarios:Usuario[]){ //35
    this.usuarios=misUsuarios;
  }

  obtenerUsuarios(){ //34
    return this.dataService.cargarUsuarios();
  }
  usuarios:Usuario[]=[]; //34
  /*usuarios:Usuario[]=[

    new Usuario("Fernando", "Rojas", "Patron", 23),
    new Usuario("Antonio", "Gordon", "Comisionado", 28)

  ];

   */

  agregarUS(usuario:Usuario){
    this.usuarios.push(usuario); // VENDRIA A SER EL RETURN DE JAVA (19)
    this.dataService.guardarUsuarios(this.usuarios); //33
  }

  findUS(indice:number){
    let usuario:Usuario=this.usuarios[indice] // 28
    return usuario;
  }

  editarUS(indice:number, usuario:Usuario){
    let usuarioeditado=this.usuarios[indice] // 28
    usuarioeditado.nombre=usuario.nombre;
    usuarioeditado.apellido=usuario.apellido;
    usuarioeditado.rol=usuario.rol;
    usuarioeditado.edad=usuario.edad;
    this.dataService.editarUsuarioNube(indice, usuario);
  }

  borrarUS(indice:number){
    this.usuarios.splice(indice,1);
    this.dataService.borrarUsuarioNube(indice); //37
    if(this.usuarios!=null) this.dataService.guardarUsuarios(this.usuarios); // Posicionamiento CO relativo en la nube (indices)
  }
}
