import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Ng4Recipe} from './ng4-recipe.model';
import {Observable} from 'rxjs';
import {DataStorageService} from '../shared/data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Ng4Recipe[]> {

  constructor(private dataStorageService: DataStorageService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ng4Recipe[]> | Promise<Ng4Recipe[]> | Ng4Recipe[] {
    return  this.dataStorageService.fetchRecipes();
  }
}
