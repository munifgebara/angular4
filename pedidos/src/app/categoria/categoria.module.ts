import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CrudcategoriaComponent } from './crudcategoria/crudcategoria.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriaRoutingModule
  ],
  declarations: [CrudcategoriaComponent]
})
export class CategoriaModule { 
   
   constructor(){
     console.log("CategoriaModule");

   }


}
