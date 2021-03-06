import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  url: string = "http://localhost:3000/product";

  constructor(private http: HttpClient) { }


  getProducts()
  {
    return this.http.get(`${this.url}`)

  }

}
