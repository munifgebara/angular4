import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() objetos = [];
  @Output() edit = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  onEdit(objeto) {
    this.edit.emit(objeto);
  }

  onRemove(objeto) {
    this.remove.emit(objeto);
  }


}
