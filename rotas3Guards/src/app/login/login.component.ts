import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import {AutenticacaoService} from '../autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private autenticacaoService:AutenticacaoService, private router:Router ) { 

  }

  ngOnInit() {
  }

  login(){
    console.log("login");
    this.autenticacaoService.login();
    if (this.autenticacaoService.url){
       this.router.navigate([this.autenticacaoService.url]);
    }
  }

  logout(){
    console.log("logout");
    this.autenticacaoService.logout();
    this.router.navigate(["/"])
  }


}
