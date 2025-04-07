import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '3.Template-Driven-Form';

  user: { name: string; email: string } = {
    name: '', email: ''
  };

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log(form.value, this.user);
    }
  }

}
