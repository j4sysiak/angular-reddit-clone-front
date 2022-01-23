import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {GarageComponent} from '../garage/garage.component';
import {GarageStartComponent} from '../garage-start/garage-start.component';
import {GarageEditComponent} from '../garage-edit/garage-edit.component';

const garageRoutes: Routes = [
  {
    path: '',
    component: GarageComponent,
    children: [
      { path: '', component: GarageStartComponent },
      { path: 'new', component: GarageEditComponent }
      ,
      // {
      //   path: ':id',
      //   component: Ng4RecipeDetailComponent,
      //   resolve: [Ng4RecipesResolverService]
      // },
      // {
      //   path: ':id/edit',
      //   component: Ng4RecipeEditComponent,
      //   resolve: [Ng4RecipesResolverService]
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(garageRoutes)],
  exports: [RouterModule]
})

export class GarageRoutingModule{}
