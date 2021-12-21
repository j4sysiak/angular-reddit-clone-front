import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ng4Recipe} from '../ng4-recipes/ng4-recipe.model';
import {RecipeService} from '../ng4-recipes/recipe.service';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put('https://ng4-complete-guide-21-12-2021-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe(response => {
        // console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Ng4Recipe[]>(
        'https://ng4-complete-guide-21-12-2021-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
