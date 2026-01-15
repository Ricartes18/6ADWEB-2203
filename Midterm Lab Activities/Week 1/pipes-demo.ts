import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, AsyncPipe, CurrencyPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, JsonPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo implements OnInit{
  presentDate = new Date();

  time$ = interval(1000).pipe(map(() => new Date()));

  price : number = 20000; ngOnInit(): void {

  }

  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate" ];

  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  percent1: number = 0.259;
  percent2: number = 1.3495;

  object: Object = {ced: 'ric', dung: 'ca', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
}
