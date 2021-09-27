import { Component, Input, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/services/connect.service';
import { Product } from '../../interfaces/Product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  products:any;


  constructor(private apiService: ConnectService) { }

  ngOnInit(): void {

    this.apiService
    .getProducts() .subscribe((product) => (this.products = product)
    
 
    );

  }
  //   this.apiService.getProducts().subscribe((res)=>
  //   {
  //     this.products=res;
  //     console.log(res);
  //   })
  // }

}
