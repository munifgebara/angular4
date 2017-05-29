import { NgModule } from '@angular/core';
import { Routes, RouterModule,Router} from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { NaoexisteComponent } from './naoexiste/naoexiste.component';

const routes: Routes = [

  { path: 'principal', component: PrincipalComponent },
  { path: '',   redirectTo: '/principal',    pathMatch: 'full'  },
  { path: '**', component: NaoexisteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    
    constructor(r:Router){
      this.logaRotas("/",r.config);
    }

    logaRotas(pai:String,rotas:Routes){
      for (let i=0;i<rotas.length;i++){
        console.log("path:",pai,rotas[i].path,rotas[i].component?rotas[i].component:"-->"+rotas[i].redirectTo);
        if (rotas[i].children){
          this.logaRotas(rotas[i].path+"/",rotas[i].children);
        }
      }

    }

 }
