import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-rota3',
  templateUrl: './rota3.component.html',
  styleUrls: ['./rota3.component.css']
})
export class Rota3Component implements OnInit {

  id="teste";

  constructor(
  private route: ActivatedRoute,
  private router: Router
  
) {}

  ngOnInit() {
  }

}
