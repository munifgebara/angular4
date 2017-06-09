import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudcategoriaComponent } from './crudcategoria/crudcategoria.component';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';


const routes: Routes = [
  { path:'categorias',    component:CrudcategoriaComponent,
    children:[
      { path:'',component:ListaComponent },
      { path:'detalhes/:id',component:DetalhesComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { 
 constructor(){
     

   }

}
