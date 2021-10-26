import { Component, OnInit } from '@angular/core';
import {Ng4Recipe} from "./ng4-recipe.model";

@Component({
  selector: 'app-ng4-recipes',
  templateUrl: './ng4-recipes.component.html',
  styleUrls: ['./ng4-recipes.component.css']
})
export class Ng4RecipesComponent implements OnInit {
  selectedRecipe: Ng4Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
