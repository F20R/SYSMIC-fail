import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import firebase from "firebase/compat/app";
import {RekeningService} from "./rekening/rekening.service"; //40

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private rekeningService:RekeningService) { //43
  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBBP3S-26-IDsSFjuxeHvckjGvVWMQd2KI",
      authDomain: "usuariosysmic.firebaseapp.com",
    });
  }

  estaLogueado(){ //43
    return this.rekeningService.estalogueado();
  }

  logout(){ //43
    this.rekeningService.logout();
  }
}
