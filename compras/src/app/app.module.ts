import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProdutosModule } from './produtos/produtos.module';
import { ListasModule } from './listas/listas.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProdutosModule,
    ListasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
