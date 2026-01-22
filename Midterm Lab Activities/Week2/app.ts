import { Product } from './product';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-services-demo');

    public employees: {
      id: number,
      firstname: string,
      lastname: string,
      email: string,
    }[] = [];

    public products: {
      id: number;
      productname: string;
      description: string;
      price: number;
    }[] = [];

    constructor(
      private _productService: Product,
      private _employeeService: Employee
    ) {}

    ngOnInit() {
      this.products = this._productService.getProducts();
      this.employees = this._employeeService.getEmployees();
    }

}

