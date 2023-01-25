import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {RekeningService} from "./rekening.service";

@Component({
  selector: 'app-rekening',
  templateUrl: './rekening.component.html',
  styleUrls: ['./rekening.component.css']
})
export class RekeningComponent implements OnInit {

  url="sysmic.ico"

  constructor(private rekeningService:RekeningService) { }

  ngOnInit(): void {
  }

  rekening(form:NgForm){

    const email=form.value.email
    const password=form.value.password
    this.rekeningService.rekening(email, password);

  }
}
