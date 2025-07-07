import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A4-Products';
  companyName='Go Digital'
  products: Product[] = [
    { id:'1', name: 'Laptop', price: 65000 },
    { id:'2', name: 'Phone', price: 25000 },
    { id:'3', name: 'Tablet', price: 18000 },
    { id:'3', name: 'Computer', price: 18000 }
  ]
}
export class Product {
  id = '';
  name = '';
  price = 0;
}
