import { Injectable } from '@angular/core';
import { SuperService} from './superservice.service';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class ProdutoService extends SuperService{

  constructor( http: Http) {
    super('produto',http);
   }

  
}
