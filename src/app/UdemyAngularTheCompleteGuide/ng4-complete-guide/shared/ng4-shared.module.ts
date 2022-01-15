import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Ng4AlertComponent} from './ng4-alert/ng4-alert.component';
import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {Ng4PlaceholderDirective} from './ng4-placeholder/ng4-placeholder.directive';
import {DropdownDirective} from './dropdown.directive';

@NgModule({
  declarations: [
    Ng4AlertComponent,
    LoadingSpinnerComponent,
    Ng4PlaceholderDirective,
    DropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Ng4AlertComponent,
    LoadingSpinnerComponent,
    Ng4PlaceholderDirective,
    DropdownDirective,
    CommonModule
  ],
  entryComponents: [Ng4AlertComponent]
})
export class Ng4SharedModule {}
