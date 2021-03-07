import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PolicyModel} from './policy-model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http: HttpClient) { }

  getAllPolicies(): Observable<Array<PolicyModel>> {
    return this.http.get<Array<PolicyModel>>('http://localhost:8080/api/policy');
  }

  getPolicy(id: number): Observable<PolicyModel> {
    return this.http.get<PolicyModel>('http://localhost:8080/api/policy/' + id);
  }

  getAllPoliciesByProductId(productId: number): Observable<Array<PolicyModel>> {
    return this.http.get<Array<PolicyModel>>('http://localhost:8080/api/policy/by-product/' + productId);
  }

  getPoliciesByKeyword(theKeyword: string): Observable<Array<PolicyModel>> {
    console.log('theKeyword (in policy.service) = ' + theKeyword);
    return this.http.get<Array<PolicyModel>>('http://localhost:8080/api/policy/by-name-containing/' + theKeyword);
  }
}
