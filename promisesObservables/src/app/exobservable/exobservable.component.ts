import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-exobservable',
  templateUrl: './exobservable.component.html',
  styleUrls: ['./exobservable.component.css']
})
export class ExobservableComponent implements OnInit {

  result;
  contador;
  contador2;

  constructor() {
    //this.add(5,2).toPromise().then(result=>this.result=result);
    this.add(5, 2)
      .mergeMap(result => this.add(result, 3))
      .subscribe(result => this.result = result);
    this.countdown(10).subscribe(result => this.contador = result,null,
    () => this.contador='Feito'    );
    this.countdown2(10).subscribe(result => this.contador2 = result,null,
    () => this.contador2='Feito'    );
  }

  ngOnInit() {
  }



  add(x, y): Observable<number> {
    return Observable.create(observer =>
      setTimeout(() => {
        observer.next(x + y);
        observer.complete();
      }, 100)
    );
  }

  countdown2(start):Observable<number>{
    return Observable.timer(1,500)
    .map(x=>{
      console.log(Date.now());
      return start-x;
    })
    .takeWhile(a=>a>0);
  }

  countdown(start): Observable<number> {
    return Observable.create(observer => {
      let counter = start;
      observer.next(counter--);
      const i=setInterval(() => {
        if (counter > 0) {
          observer.next(counter--);
        }
        else {
          observer.complete();
          clearInterval(i);
        }
      }, 500);
    }
    );
  }


}
