import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ng4Recipe} from "../../ng4-recipe.model";

@Component({
  selector: 'app-ng4-recipe-item',
  templateUrl: './ng4-recipe-item.component.html',
  styleUrls: ['./ng4-recipe-item.component.css']
})
export class Ng4RecipeItemComponent implements OnInit {
  @Input()  recipe: Ng4Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipeSelected.emit();
  }
}
