import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { NaoexisteComponent } from './naoexiste/naoexiste.component';

import  {PessoasModule} from './pessoas/pessoas.module';
import  {ProdutosModule} from './produtos/produtos.module';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NaoexisteComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PessoasModule,
    ProdutosModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
