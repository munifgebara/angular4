import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AutenticacaoService} from './autenticacao.service';

@Injectable()
export class AtenticadorGuard implements CanActivate {
 constructor(private autenticacaoService:AutenticacaoService,private router:Router){


  }



  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("Chamando Guard para ",state.url);
    this.autenticacaoService.url=state.url;
    if (!this.autenticacaoService.estaLogado){
         this.router.navigate(['/login']);
    }
    return this.autenticacaoService.estaLogado;
  }
}
