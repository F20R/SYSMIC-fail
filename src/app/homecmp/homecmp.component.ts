import { Component, OnInit } from '@angular/core';
import {Usuario} from "../usuario.model";
import {ServicioUsuarioService} from "../servicio-usuario.service";
import {UsuarioService} from "../usuario.service";
import {DataServices} from "../data.services";

@Component({
  selector: 'app-homecmp',
  templateUrl: './homecmp.component.html',
  styleUrls: ['./homecmp.component.css']
})
export class HomecmpComponent implements OnInit {

  title = 'SysmicProject';

  titulo="Lista De Usuarios";

  constructor(private miServicio:ServicioUsuarioService, private usuarioService:UsuarioService) {
    //this.usuarios=usuarioService.usuarios;


  }
  ngOnInit(): void {
  this.usuarioService.obtenerUsuarios().subscribe(misUsuarios=>{
    console.log(misUsuarios);
    this.usuarios=Object.values(misUsuarios);//35
    this.usuarioService.setUsuarios(this.usuarios);//35
  }); //34
  }

  usuarios:Usuario[]=[];

  agregarUsuario(){
    let miUsuario= new Usuario(
      //this.miServicio.muestramensaje("Nombre del usuario: " + miUsuario.nombre);
      this.cuadroNombre,
      this.cuadroApell,
      this.cuadroRol,
      this.cuadroEdad);
    this.usuarioService.agregarUS(miUsuario);
  }

  cuadroNombre:string="";
  cuadroApell:string="";
  cuadroRol:string="";
  cuadroEdad:number=0;

}
