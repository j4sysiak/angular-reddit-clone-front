import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Ng4ShoppingListService} from './ng4-shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-ng4-shopping-list',
  templateUrl: './ng4-shopping-list.component.html',
  styleUrls: ['./ng4-shopping-list.component.css']
})
export class Ng4ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private  shoppingListService: Ng4ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
