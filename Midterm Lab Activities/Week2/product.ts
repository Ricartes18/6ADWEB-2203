import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  getProducts() {
    return [
    {
      id: 101,
      productname: 'Logitech Mouse',
      description: '6 Button Mechanical Mouse',
      price: 899.00
    },
    {
      id: 102,
      productname: 'JBL BT Speaker',
      description: 'Waterproof Radio 360 Surround',
      price: 1099.00
    },
    {
      id: 103,
      productname: 'Mechanical KeyBoard',
      description: 'Hot-swappable RGB Backlit',
      price: 2395.00
    },
    {
      id: 104,
      productname: 'Oculus Meta',
      description: 'All-in-one Gaming Headset',
      price: 22450.00
    },
  ]
  }
}
