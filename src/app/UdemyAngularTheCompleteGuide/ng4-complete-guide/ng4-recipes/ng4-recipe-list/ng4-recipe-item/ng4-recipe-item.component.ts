import {Component, Input, OnInit} from '@angular/core';
import {Ng4Recipe} from '../../ng4-recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-ng4-recipe-item',
  templateUrl: './ng4-recipe-item.component.html',
  styleUrls: ['./ng4-recipe-item.component.css']
})
export class Ng4RecipeItemComponent implements OnInit {
  @Input()  recipe: Ng4Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
