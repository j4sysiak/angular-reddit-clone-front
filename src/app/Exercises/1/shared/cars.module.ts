import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {CarComponent} from '../car/car.component';
import {CarEditComponent} from '../car-edit/car-edit.component';

@NgModule({
  declarations: [
    CarComponent,
    CarEditComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([
      { path: '', component: CarComponent }
    ]),
  ],
})
export class CarsModule {}
