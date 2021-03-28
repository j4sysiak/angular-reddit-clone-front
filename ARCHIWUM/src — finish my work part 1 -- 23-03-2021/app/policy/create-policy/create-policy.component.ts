import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PolicyModel} from '../policy-model';
import {ProductModel} from '../../product/product-response';
import {Router} from '@angular/router';
import {ProductService} from '../../product/product.service';
import {PolicyService} from '../policy.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.css']
})
export class CreatePolicyComponent implements OnInit {

  createPolicyForm: FormGroup;
  policyModel: PolicyModel = new PolicyModel();
  products: Array<ProductModel>;

  constructor(private router: Router, private policyService: PolicyService,
              private productService: ProductService) {
    this.policyModel = {
      policyName: '',
      policyCreatedDate: '',
      policyDescription: '',
      productName: '',
      productId: 0
    };
  }

  ngOnInit(): void {
    this.createPolicyForm = new FormGroup({
      policyName: new FormControl('', Validators.required),
      policyDescription: new FormControl('', Validators.required),
      // policyCreatedDate: new FormControl('', Validators.required),
      productName: new FormControl('', Validators.required),
    });

    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    }, error => {
      throwError(error);
    });
  }

  createPolicy() {
    this.policyModel.policyName = this.createPolicyForm.get('policyName').value;
    this.policyModel.policyDescription = this.createPolicyForm.get('policyDescription').value;
    // this.policyModel.policyCreatedDate = this.createPolicyForm.get('policyCreatedDate').value;
    this.policyModel.productName = this.createPolicyForm.get('productName').value;
    //this.policyModel.productId = this.createPolicyForm.get('productId').value;

    console.log('this.policyModel.policyName = ' + this.policyModel.policyName);
    console.log('this.policyModel.policyDescription = ' + this.policyModel.policyDescription);
    console.log('this.policyModel.productName = ' + this.policyModel.productName);
    //console.log('this.policyModel.productId = ' + this.policyModel.productId);

    this.policyService.createPolicy(this.policyModel).subscribe((data) => {
      this.router.navigateByUrl('/list-policy');
    }, error => {
      throwError(error);
    });
  }

  discardPolicy() {
    this.router.navigateByUrl('/');
  }
}
