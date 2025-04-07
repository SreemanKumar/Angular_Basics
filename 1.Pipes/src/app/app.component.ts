import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '1.Pipes';

  string1: string = 'Hello';
  string2: string = 'World';

  today: number = Date.now();

  currency: number = 1.3456;

  percentage: number = 1.3456 / 10;

  customepipetitle: string='Custom Pipe'
}
