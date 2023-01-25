import {Component, Input, OnInit} from '@angular/core';
import {Usuario} from "../usuario.model";

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  //Dar nombre a la variable del [] creado en el componente padre (19) con @INPUT
  @Input() usuarioLista:Usuario;
  @Input() indice:number;

  constructor() { }

  ngOnInit(): void {
  }

  listaCaracteristicas = ['']; //Nombrar el array para dar lugar a las llamadas (20)

  agregarCaracteristica(nueva:string) {
    this.listaCaracteristicas.push(nueva);
  }

}
