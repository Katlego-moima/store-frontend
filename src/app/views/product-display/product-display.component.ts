import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss']
})
export class ProductDisplayComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products=> {
      this.products = products;
    });
  }

}
