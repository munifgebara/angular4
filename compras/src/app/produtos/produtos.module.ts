import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud/crud.component';
import { FormsModule } from '@angular/forms';

import { ProdutosService } from './produtos.service';
import { EditaComponent } from './edita/edita.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [CommonModule,FormsModule],
  declarations: [CrudComponent, EditaComponent, ListaComponent],
  exports: [CrudComponent],
  providers: [ProdutosService] 
})
export class ProdutosModule { }
