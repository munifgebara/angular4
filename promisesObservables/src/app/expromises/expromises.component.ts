import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expromises',
  templateUrl: './expromises.component.html',
  styleUrls: ['./expromises.component.css']
})
export class ExpromisesComponent implements OnInit {

  result;
  time;

  constructor() { 
    this.add(5,2)
    .then(result=>this.add(result,3))
    .then(result=>this.add(result,1))
    
    
    .then(result=>this.result=result);
    
  }

  ngOnInit() {
  }

  add(x,y){
    return new Promise(resolve=>{
     setTimeout(()=>resolve(x+y),100);
    });
   
  }

}
