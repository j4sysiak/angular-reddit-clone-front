import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PolicyService} from '../policy.service';
import {PolicyModel} from '../policy-model';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-view-policy',
  templateUrl: './view-policy.component.html',
  styleUrls: ['./view-policy.component.css']
})
export class ViewPolicyComponent implements OnInit {

  policyId: number;
  // tslint:disable-next-line:new-parens
  policy: PolicyModel = new PolicyModel;

  constructor(private policyService: PolicyService,
              private activateRoute: ActivatedRoute) {
    this.policyId = this.activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getPolicyById();
  }

  getPolicyById() {
    this.policyService.getPolicy(this.policyId).subscribe(data => {
      this.policy = data;
    }, error => {
      throwError(error);
    });
  }
}
