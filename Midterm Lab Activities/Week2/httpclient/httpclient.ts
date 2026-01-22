import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class Httpclient {
  constructor(
    private http: HttpClient
  ) {}

  getUsersRemotely(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  getPostsRemotely(): Observable<any[]> {
  return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
}

}
