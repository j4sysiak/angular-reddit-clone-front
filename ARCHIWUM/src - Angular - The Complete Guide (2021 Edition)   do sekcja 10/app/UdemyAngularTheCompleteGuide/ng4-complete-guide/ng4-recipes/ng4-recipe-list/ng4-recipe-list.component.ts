import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ng4Recipe} from '../ng4-recipe.model';

@Component({
  selector: 'app-ng4-recipe-list',
  templateUrl: './ng4-recipe-list.component.html',
  styleUrls: ['./ng4-recipe-list.component.css']
})
export class Ng4RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Ng4Recipe>();

  recipes: Ng4Recipe[] = [
    new Ng4Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Ng4Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Ng4Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
























