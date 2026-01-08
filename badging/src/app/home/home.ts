import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  standalone: true,
  styleUrls: ['./home.css'],
})
export class Home {

  imageUrl = "../assets/hero.jpg"

  cities = [
    { name: 'France',
      description: 'The largest country in Western Europe, has long been a gateway between the northern and southern regions.',
      category: 'Architecture and Fine Arts',
      image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=800&auto=format&fit=crop',
      badgeClass: 'bg-yellow-100 text-yellow-800' },
    { name: 'Seoul',
      description: "Korean Seoul (formally Soul-t'ukpyolsi, 'Special City of Seoul'), city and capital of South Korea.",
      category: 'Humanities and Arts',
      image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=800&auto=format&fit=crop',
      badgeClass: 'bg-purple-100 text-purple-800' },
    { name: 'San Francisco',
      description: 'A cultural and financial centre of the western United States and one of its most cosmopolitan cities.',
      category: 'Science and Technology',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/San_Francisco_Downtown_Aerial%2C_August_2025.jpg/330px-San_Francisco_Downtown_Aerial%2C_August_2025.jpg',
      badgeClass: 'bg-blue-100 text-blue-800' },
    { name: 'Boston',
      description: 'Best known for its famous baked beans, Fenway Park, The Boston Marathon, and the bar from Cheers.',
      category: 'Engineering and Tech',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
      badgeClass: 'bg-red-100 text-red-800' }
    ];
}
