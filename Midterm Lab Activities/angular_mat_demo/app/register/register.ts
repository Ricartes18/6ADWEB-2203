import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatDividerModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  userName: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  birthDate!: Date;
  address: string = '';
  angularSkillLevel: number = 5;
  submitted = false;
  minSkillLevel = 1;
  maxSkillLevel = 10;
  country: string = "";


  formdata: FormGroup = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    address: new FormControl(''),
    angularSkillLevel: new FormControl(5),
    country: new FormControl('', [Validators.required])
  });

  onClickSubmit(data: {
    userName: string;
    email: string;
    password: string;
    gender: string;
    address: string;
    birthDate: Date;
    angularSkillLevel: number;
    country: string;

  }){
    this.submitted = true;
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
    this.gender = data.gender;
    this.address = data.address;
    this.angularSkillLevel = data.angularSkillLevel;
    this.birthDate = data.birthDate;
    this.country = data.country;


    if (this.formdata.valid) {
      console.log('Form Submitted!', this.formdata.value);
    } else {
      console.log('Form is not valid!');
    }
  };

  get formProgress(): number {
  const totalControls = Object.keys(this.formdata.controls).length;
  const validControls = Object.values(this.formdata.controls)
    .filter(control => control.valid && control.value !== null && control.value !== '')
    .length;

  return (validControls / totalControls) * 100;
  }



}
