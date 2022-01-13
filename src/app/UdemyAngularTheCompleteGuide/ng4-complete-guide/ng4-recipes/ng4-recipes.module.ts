import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {Ng4RecipesComponent} from './ng4-recipes.component';
import {Ng4RecipeListComponent} from './ng4-recipe-list/ng4-recipe-list.component';
import {Ng4RecipeDetailComponent} from './ng4-recipe-detail/ng4-recipe-detail.component';
import {Ng4RecipeItemComponent} from './ng4-recipe-list/ng4-recipe-item/ng4-recipe-item.component';
import {Ng4RecipeStartComponent} from './ng4-recipe-start/ng4-recipe-start.component';
import {Ng4RecipeEditComponent} from './ng4-recipe-edit/ng4-recipe-edit.component';


@NgModule({
  declarations: [
    Ng4RecipesComponent,
    Ng4RecipeListComponent,
    Ng4RecipeDetailComponent,
    Ng4RecipeItemComponent,
    Ng4RecipeStartComponent,
    Ng4RecipeEditComponent
  ],
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  exports: [
    Ng4RecipesComponent,
    Ng4RecipeListComponent,
    Ng4RecipeDetailComponent,
    Ng4RecipeItemComponent,
    Ng4RecipeStartComponent,
    Ng4RecipeEditComponent
  ]
})
export class Ng4RecipesModule {}
