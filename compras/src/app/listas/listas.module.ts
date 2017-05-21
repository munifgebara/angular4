import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud/crud.component';

import { FormsModule } from '@angular/forms';
import { ListasService } from './listas.service';
import { EditaComponent } from './edita/edita.component';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  imports: [CommonModule,FormsModule],
  declarations: [CrudComponent, EditaComponent, ListaComponent],
  exports: [CrudComponent],
  providers: [ListasService] 
})
export class ListasModule { }
