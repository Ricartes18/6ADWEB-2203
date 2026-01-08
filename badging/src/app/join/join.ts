import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-join',
  imports: [FormsModule],
  templateUrl: './join.html',
  styleUrl: './join.css',
})
export class Join {
  imageUrl = "https://mdbcdn.b-cdn.net/img/new/slides/041.webp"

  firstName = '';
  lastName = '';
  email = '';
  institution = '';
}
