import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-partners',
  imports: [CommonModule],
  templateUrl: './partners.html',
  styleUrl: './partners.css',
})
export class Partners {
  imageUrl = 'https://greatruns.com/wp-content/uploads/2016/12/Yosemite-NP-Cover.jpeg'

  partners = [
    { name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      sponsorship: 'Platinum',
      website: 'https://www.microsoft.com' },
    { name: 'Apple',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      sponsorship: 'Gold',
      website: 'https://www.apple.com' },
    { name: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      sponsorship: 'Silver',
      website: 'https://www.amazon.com' },
      { name: 'Google',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        sponsorship: 'Bronze',
        website: 'https://www.google.com' } ];
}
