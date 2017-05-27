import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {AccordionModule,GrowlModule} from 'primeng/primeng';     //accordion and accordion tab



import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    FormsModule,
    HttpModule,AccordionModule,GrowlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
