import {Injectable, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class RekeningService {

  constructor(private router:Router, private cookies:CookieService) {}
  token:string;
  rekening(email:string, password:string){

    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response=>{
        firebase.auth().currentUser?.getIdToken().then(
          token=>{
            this.token=token;
            this.cookies.set("token", this.token); //44
            this.router.navigate(["/"]);
          }
        )
      }
    ) //para dar autorizacion desde la FIREBASE
  }
  getIdToken(){
    //return this.token;
    return this.cookies.get("token");//44
  }

  estalogueado(){

    //return this.token;
    return this.cookies.get("token");//44
  }

  logout(){
    firebase.auth().signOut().then(()=>{
      this.token="";
      this.cookies.set("token", this.token);//44
      this.router.navigate(["/"]);
      window.location.reload();
      }
    );
  }

}
