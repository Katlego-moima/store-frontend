import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/Product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() product: Product = {
    id: 0,
    name: "",
    description: "",
    price: 0,
    size: "",
    imgUrl: "",
  };

  constructor() { }

  ngOnInit(): void {
    
  }

}
