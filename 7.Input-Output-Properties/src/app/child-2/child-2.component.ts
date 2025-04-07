import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-2',
  standalone: false,
  templateUrl: './child-2.component.html',
  styleUrl: './child-2.component.css'
})
export class Child2Component {

  // Child to Parent
  @Output() myData = new EventEmitter<any>();
  btnClick(): void {
    this.myData.emit('This text is from Child Component');
  }
}
