import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Usuario} from "./usuario.model";
import {RekeningService} from "./rekening/rekening.service";
@Injectable() //para inyectar el http
export class DataServices{

  constructor(private httpClient:HttpClient, private rekeningService:RekeningService) { //importar la http
  }

  cargarUsuarios(){
    const token=this.rekeningService.getIdToken();
    return this.httpClient.get("https://usuariosysmic-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=" + token);
  }
  guardarUsuarios(usuarios:Usuario[]){

    //POSST=>REPITE DATOS
    //PUT=>NO REPITE

    this.httpClient.put("https://usuariosysmic-default-rtdb.europe-west1.firebasedatabase.app/datos.json", usuarios).subscribe(
      response=>console.log("SIGAN SIGAN" + response),
      error => console.log("ERROR" + error),

    );

  }

  editarUsuarioNube(indice:number, usuario:Usuario){ //ordenador los registros (incluido el 0) 36

    let url="https://usuariosysmic-default-rtdb.europe-west1.firebasedatabase.app/datos/" + indice + ".json";

    this.httpClient.put(url, usuario).subscribe(
      response=>console.log("TODO BIEN" + response),
      error => console.log("UPS: " + error),
    );
  }

  borrarUsuarioNube(indice:number){ //37

    let url="https://usuariosysmic-default-rtdb.europe-west1.firebasedatabase.app/datos/" + indice + ".json";

    this.httpClient.delete(url).subscribe(
      response=>console.log("ELIMINADO!" + response),
      error => console.log("NO HE PODIDO ELIMINARLO  " + error),
    );
  }

}
