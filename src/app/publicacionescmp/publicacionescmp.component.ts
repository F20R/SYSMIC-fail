import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Usuario} from "../usuario.model";
import {ServicioUsuarioService} from "../servicio-usuario.service";
import {UsuarioService} from "../usuario.service";

@Component({
  selector: 'app-publicacionescmp',
  templateUrl: './publicacionescmp.component.html',
  styleUrls: ['./publicacionescmp.component.css']
})
export class PublicacionescmpComponent implements OnInit {

  constructor(private router:Router, private miServicio:ServicioUsuarioService, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
  }

  redirect(){
    //El objeto esta vacio porque nos dirigimos al HOME (el cual no tiene enlace en el HTML)
    this.router.navigate(["menu"]);
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
    this.router.navigate([""]);//redireccionar a home despues de rellenar un FORM (26)
  }

  cuadroNombre:string="";
  cuadroApell:string="";
  cuadroRol:string="";
  cuadroEdad:number=0;








}
