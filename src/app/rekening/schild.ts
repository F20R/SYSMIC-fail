import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {RekeningService} from "./rekening.service";
import {Injectable} from "@angular/core";

@Injectable()
export class Schild implements CanActivate{


  constructor(private rekeningService:RekeningService, private router:Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.rekeningService.estalogueado()){
      return true;
    }else{
      this.router.navigate(["rekening"]);
      return false;
    }

  }

}
