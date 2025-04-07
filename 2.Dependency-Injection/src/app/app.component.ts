import { Component } from '@angular/core';
import { MessageService } from './Services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2.Dependency-Injection';

  message: string[] = [];
  constructor(private messageService: MessageService) {
    this.message = messageService.getMessage();
  }
}
