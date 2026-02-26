import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-challenge',
  imports: [CommonModule,
    MatSelectModule,
    MatRadioModule,
    MatExpansionModule,
    MatProgressBar,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './challenge.html',
  styleUrl: './challenge.css',
})
export class Challenge {

  formdata: FormGroup;
  darkMode = false;

  constructor(private fb: FormBuilder) {
    this.formdata = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^[A-Za-z][A-Za-z0-9]{7,}$/) // starts with letter, alphanumeric, min 8
      ]],
      birthDate: ['', [this.birthYearValidator]],
      program: ['', Validators.required],
      gender: ['', Validators.required],
      highSchool: [''],
      darkMode: [false]
    });
  }

  // DOB validator
  birthYearValidator(control: AbstractControl) {
    const date = new Date(control.value);
    if (date.getFullYear() > 2006) {
      return { invalidYear: true };
    }
    return null;
  }

  // Progress bar calculation
  get formProgress(): number {
    const total = Object.keys(this.formdata.controls).length;
    const valid = Object.values(this.formdata.controls).filter(c => c.valid).length;
    return (valid / total) * 100;
  }

  toggleTheme() {
    this.darkMode = this.formdata.get('darkMode')?.value;
  }

  submitted = false; onSubmit() { if (this.formdata.valid) { this.submitted = true; console.log('Admission Form submitted:', this.formdata.value); } }
}
