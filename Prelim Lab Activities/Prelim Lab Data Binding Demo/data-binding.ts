import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  title = "Cedric's First App"
  description = "This is my new Angular Application"

  imageUrl = "../assets/images.jpg"
  w = 150;
  h = 150;
  altText = 'One punch'

  textColor='green';

  isHighlighted = true;

  yourName = '';

  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
