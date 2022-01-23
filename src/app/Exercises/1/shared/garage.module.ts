import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {GarageRoutingModule} from './garage-routing.module';
import {GarageListComponent} from '../garage-list/garage-list.component';
import {GarageStartComponent} from '../garage-start/garage-start.component';
import {GarageEditComponent} from '../garage-edit/garage-edit.component';

@NgModule({
  declarations: [
    GarageListComponent,
    GarageStartComponent,
    GarageEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    GarageRoutingModule
  ]
})
export class GarageModule { }
