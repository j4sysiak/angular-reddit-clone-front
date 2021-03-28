import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../product.service';
import {throwError} from 'rxjs';
import {ProductModel} from '../product-response';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productModel: ProductModel;
  createProductForm: FormGroup;
  name = new FormControl('');

  constructor(private router: Router,
              private productService: ProductService) {
    this.createProductForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });
    this.productModel = {
      name: ''
    };
  }

  ngOnInit(): void {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createProduct() {
    this.productModel.name = this.createProductForm.get('name').value;

    this.productService.createProduct(this.productModel).subscribe(data => {
      this.router.navigateByUrl('/list-product');
    }, error => {
      throwError(error);
    });
  }
}
