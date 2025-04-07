import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '4.Reactive-Forms';

  userForms!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForms = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],

      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required]
      }),

      phoneNumbers: this.formBuilder.array([
        this.formBuilder.control('', [Validators.required])
      ]),


    });
  }

  get phoneNumbers() {
    return this.userForms.get('phoneNumbers') as FormArray;
  }

  addPhoneNumber() {
    this.phoneNumbers.push(
      this.formBuilder.control('', [Validators.required])
    );
  }

  removePhoneNumber(index: any) {
    this.phoneNumbers.removeAt(index);
  }



  submitForm() {
    if (this.userForms.valid) {
      console.log(this.userForms.value);
    }
  }

}
