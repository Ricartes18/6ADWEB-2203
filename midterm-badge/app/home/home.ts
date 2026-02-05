import { Component } from '@angular/core';
import { NgFor, AsyncPipe, UpperCasePipe, DatePipe, SlicePipe, JsonPipe } from '@angular/common';
import { DataService } from '../data-service';
import { map } from 'rxjs';
import { TitleCaseWordsPipe } from '../../pipes/title-case-words-pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor, AsyncPipe,
    UpperCasePipe, DatePipe, SlicePipe, JsonPipe,
    TitleCaseWordsPipe
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  today = new Date();
  latestPosts$: any;
  ngOnInit() {
    this.latestPosts$ = this.dataService.getPosts().pipe(
      map(posts => posts.slice(0, 5)) );


} constructor(private dataService: DataService) {}
}
