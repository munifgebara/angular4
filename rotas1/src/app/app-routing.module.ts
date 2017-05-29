import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
export class AppRoutingModule { }
