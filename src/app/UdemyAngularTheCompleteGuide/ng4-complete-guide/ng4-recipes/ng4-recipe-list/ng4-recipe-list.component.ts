import {Component, OnInit} from '@angular/core';
import {Ng4Recipe} from '../ng4-recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-ng4-recipe-list',
  templateUrl: './ng4-recipe-list.component.html',
  styleUrls: ['./ng4-recipe-list.component.css']
})
export class Ng4RecipeListComponent implements OnInit {
  recipes: Ng4Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

}
























