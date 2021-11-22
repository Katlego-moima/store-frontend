import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/services/connect.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  products:any;


  constructor(private connect: ConnectService) { }

  ngOnInit(): void {

    this.connect
    .getProducts() .subscribe((product) => (this.products = product)
    
 
    );

  }
 

}
