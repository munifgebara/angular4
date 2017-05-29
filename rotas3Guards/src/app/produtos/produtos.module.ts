import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { CrudComponent } from './crud/crud.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ],
  declarations: [CrudComponent, DetalhesComponent, ListaComponent]
})
export class ProdutosModule { }
