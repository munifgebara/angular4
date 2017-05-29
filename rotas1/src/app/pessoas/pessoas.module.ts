import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { CrudComponent } from './crud/crud.component';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

@NgModule({
  imports: [
    CommonModule,
    PessoasRoutingModule
  ],
  declarations: [CrudComponent, ListaComponent, DetalhesComponent]
})
export class PessoasModule { }
