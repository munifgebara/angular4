import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpromisesComponent } from './expromises/expromises.component';
import { ExobservableComponent } from './exobservable/exobservable.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpromisesComponent,
    ExobservableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
