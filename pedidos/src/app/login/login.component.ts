import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GumgaAutorizadorService } from '../gumga-autorizador.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser = { email: '', password: '' };
  constructor(private gas: GumgaAutorizadorService,private router:Router) { }

  ngOnInit() {
    this.newUser = { email: '', password: '' };

  }

  onSubmit(form: NgForm) {
    console.log('should register:', this.newUser);
    this.gas.login(this.newUser.email, this.newUser.password).then(response=>{
    if (this.gas.url){
       this.router.navigate([this.gas.url]);
    }
    }
      
    )


  }

}
