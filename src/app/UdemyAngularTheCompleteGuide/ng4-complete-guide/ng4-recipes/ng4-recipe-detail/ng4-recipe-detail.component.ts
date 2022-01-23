import {Component, Input, OnInit} from '@angular/core';
import {Ng4Recipe} from '../ng4-recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-ng4-recipe-detail',
  templateUrl: './ng4-recipe-detail.component.html',
  styleUrls: ['./ng4-recipe-detail.component.css']
})
export class Ng4RecipeDetailComponent implements OnInit {
  @Input() recipe: Ng4Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList() {
    console.log(this.recipe.ingredients[0].name);
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
