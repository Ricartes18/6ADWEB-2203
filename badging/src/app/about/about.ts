import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  imageUrl = "https://mdbcdn.b-cdn.net/img/new/slides/041.webp"

  giftMessage = '';
  onGetGift() {
    this.giftMessage = '🎁 Congratulations! You can get up to 50% off using the gift code: C3DGIFT'; }
}
