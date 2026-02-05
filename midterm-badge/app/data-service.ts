import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

export interface Post {
  id: number;
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private postsSubject = new BehaviorSubject<Post[] | null>(null);
  posts$ = this.postsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    if (!this.postsSubject.value) {
      this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .pipe(
          tap(posts => this.postsSubject.next(posts)),
          shareReplay(1)
        )
        .subscribe();
    }
    return this.posts$ as Observable<Post[]>;
  }
}
