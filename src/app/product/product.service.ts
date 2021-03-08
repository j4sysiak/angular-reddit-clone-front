import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ProductModel} from './product-response';
import {SubredditModel} from '../subreddit/subreddit-response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Array<ProductModel>> {
    return this.http.get<Array<ProductModel>>('http://localhost:8080/api/product');
  }

  getProduct(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>('http://localhost:8080/api/product/' + id);
  }

  createProduct(productModel: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>('http://localhost:8080/api/product', productModel);
  }
}

