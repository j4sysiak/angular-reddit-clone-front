import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-ng4-shopping-list',
  templateUrl: './ng4-shopping-list.component.html',
  styleUrls: ['./ng4-shopping-list.component.css']
})
export class Ng4ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] =  [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
