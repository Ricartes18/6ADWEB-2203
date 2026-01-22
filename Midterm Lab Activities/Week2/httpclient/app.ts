import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Httpclient } from './httpclient';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-httpclient-demo');
  httpusers: User[] = [];

  constructor(
    private httpClient: Httpclient
  ) {}

  ngOnInit() {
    this.httpClient.getUsersRemotely().subscribe((data => {
    this.httpusers = data;

    this.httpClient.getPostsRemotely().subscribe(data => {
    this.posts = data.slice(0, 5);
  })
    }))
  }

  posts: any[] = [];

}

