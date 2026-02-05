import { DatePipe, UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, DatePipe, UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('midterm_badge');
  posts: any[] = [];
  today = new Date();
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => {
        this.posts = posts.slice(0, 5);
      });
  }
}
