import { Component } from '@angular/core';
import { error } from 'node:console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
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
}
