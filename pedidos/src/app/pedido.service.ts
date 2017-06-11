import { Injectable } from '@angular/core';
import { SuperService} from './comum/superservice.service';
import { Http, Headers, Response } from '@angular/http';
import { GumgaAutorizadorService} from './gumga-autorizador.service';


@Injectable()
export class PedidoService extends SuperService{

  constructor( http: Http,a:GumgaAutorizadorService) {
    super('pedido',http,a);
   }

  
}
