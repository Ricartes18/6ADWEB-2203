import { Component, OnInit } from '@angular/core';
import { NgFor, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';
import { DataService, Post } from '../data-service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor, AsyncPipe, FormsModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services implements OnInit {
  private searchTermSubject = new BehaviorSubject<string>('');
  searchTerm$ = this.searchTermSubject.asObservable();

  loading = true;
  error: string | null = null;

  posts$!: Observable<Post[]>;
  filteredPosts$!: Observable<Post[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.posts$ = this.dataService.getPosts().pipe(
      catchError(err => {
        this.error = 'Failed to load posts';
        this.loading = false;
        throw err;
      })
    );

    this.filteredPosts$ = combineLatest([
      this.posts$,
      this.searchTerm$.pipe(startWith(''))
    ]).pipe(
      map(([posts, term]) => {
        this.loading = false;
        const lower = term.toLowerCase();
        return posts.filter(
          p => p.title.toLowerCase().includes(lower) || p.body.toLowerCase().includes(lower)
        );
      })
    );
  }

  onSearch(term: string) {
    this.searchTermSubject.next(term);
  }
}
