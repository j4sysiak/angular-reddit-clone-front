import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {Ng4ShoppingListComponent} from './ng4-shopping-list.component';
import {Ng4ShoppingEditComponent} from './ng4-shopping-edit/ng4-shopping-edit.component';
import {FormsModule} from '@angular/forms';
import {Ng4SharedModule} from '../shared/ng4-shared.module';

@NgModule({
declarations: [ Ng4ShoppingListComponent, Ng4ShoppingEditComponent],
imports: [
      FormsModule,
      RouterModule.forChild([
              { path: 'shopping-list', component: Ng4ShoppingListComponent }
           ]),
           Ng4SharedModule
         ]
})
export class Ng4ShoppingListModule {}
