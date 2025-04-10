import { Component, OnInit } from '@angular/core';
import { error } from 'node:console';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = '8.Async-Properties';

  constructor() {
    this.displayData();
  }

  fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('data');
      }, 5000);
    });
  }

  // displayData() {
  //   this.fetchData().then((data) => {
  //     console.log(data);
  //   })
  // }

  async displayData() {
    let response = await this.fetchData();
    console.log(response)
  }

  myObservable = new Observable((observer) => {
    console.log('Observable Starts')
    observer.next('1')
    observer.next('2')
  });

  ngOnInit() {
    this.myObservable.subscribe((val) => {
      console.log(val);
    })
  }
}
