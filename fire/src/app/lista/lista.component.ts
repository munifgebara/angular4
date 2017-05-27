import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
     this.items = db.list('/bookmarks');
   }

  ngOnInit() {
  }

}
