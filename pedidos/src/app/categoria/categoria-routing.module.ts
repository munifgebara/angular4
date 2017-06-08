import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudcategoriaComponent } from './crudcategoria/crudcategoria.component';

const routes: Routes = [
  { path:'categorias',    component:CrudcategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { 
 constructor(){
     console.log("CategoriaRoutingModule");

   }

}
