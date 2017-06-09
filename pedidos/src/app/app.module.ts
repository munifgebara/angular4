import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AccordionModule,GrowlModule, DataListModule} from 'primeng/primeng';     //accordion and accordion tab
import { ToolbarModule,ButtonModule,SplitButtonModule} from 'primeng/primeng';
import { CategoriaService} from './categoria.service';
import { ProdutoService} from './produto.service';
import { PedidoService} from './pedido.service';
import { CategoriaModule} from './categoria/categoria.module';
import { ProdutoModule} from './produto/produto.module';
import { PedidoModule} from './pedido/pedido.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CategoriaModule,ProdutoModule,PedidoModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,GrowlModule,DataListModule,ToolbarModule,ButtonModule,SplitButtonModule
    
  ],
  providers: [CategoriaService,ProdutoService,PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
