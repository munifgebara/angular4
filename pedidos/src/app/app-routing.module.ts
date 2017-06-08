import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "app/dashboard/dashboard.component";


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
     path: '', redirectTo:'/dashboard',pathMatch: 'full'
  },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
