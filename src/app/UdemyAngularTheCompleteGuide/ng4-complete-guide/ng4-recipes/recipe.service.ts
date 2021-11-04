import {EventEmitter, Injectable} from '@angular/core';
import {Ng4Recipe} from './ng4-recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Ng4Recipe>();

  private recipes: Ng4Recipe[] = [
    new Ng4Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Ng4Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor(   ) {
  }

  getRecipes(      ) {
    return this.recipes.slice();
  }
}
