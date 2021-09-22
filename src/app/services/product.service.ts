import { Injectable } from '@angular/core';
import { PRODUCTS } from 'mock-products';
import { Product } from '../interfaces/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    
    return PRODUCTS;
  }
}
