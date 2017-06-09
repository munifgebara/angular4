import { Injectable } from '@angular/core';
import { SuperService} from './comum/superservice.service';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class PedidoService extends SuperService{

  constructor( http: Http) {
    super('pedido',http);
   }

  
}
