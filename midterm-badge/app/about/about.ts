import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [UpperCasePipe, DatePipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  today = new Date();
}
