import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    alert('Your message has been sent successfully!'); this.contact = { name: '', email: '', message: '' }; }
}
