import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  imports: [ReactiveFormsModule],
  templateUrl: './custom-form.html',
  styleUrl: './custom-form.css',
})
export class CustomForm {
  submittedData: any = null;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {

  this.form = this.fb.group({ mood: ['', Validators.required], energy: [5, Validators.required],
  stress: [5, Validators.required],
  reflection: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
  outlook: ['', Validators.required] });
  }
  onSubmit() {
    if (this.form.valid) {
      this.submittedData = this.form.value;
    } else { this.form.markAllAsTouched(); } }

    isInvalid(name: string) {
    const control = this.form.get(name);
    return control?.touched && control?.invalid;
  }
}
