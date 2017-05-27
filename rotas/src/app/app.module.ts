import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Rota1Component } from './rota1/rota1.component';
import { Rota2Component } from './rota2/rota2.component';
import { Rota3Component } from './rota3/rota3.component';
import { NaoExisteComponent } from './nao-existe/nao-existe.component';

const appRoutes: Routes = [
  { path: 'rota1', component: Rota1Component },
  { path: 'rota2', component: Rota2Component },
  { path: 'rota3/:id', component: Rota3Component },
  { path: '',
    redirectTo: '/rota1',
    pathMatch: 'full'
  },
  { path: '**', component: NaoExisteComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    Rota1Component,
    Rota2Component,
    Rota3Component,
    NaoExisteComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}
