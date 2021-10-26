import {Component, Input, OnInit} from '@angular/core';
import {Ng4Recipe} from "../ng4-recipe.model";

@Component({
  selector: 'app-ng4-recipe-detail',
  templateUrl: './ng4-recipe-detail.component.html',
  styleUrls: ['./ng4-recipe-detail.component.css']
})
export class Ng4RecipeDetailComponent implements OnInit {
  @Input() recipe: Ng4Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
