import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Ng4AlertComponent} from './ng4-alert/ng4-alert.component';
import {Ng4PlaceholderDirective} from './ng4-placeholder/ng4-placeholder.directive';
import {DropdownDirective} from './dropdown.directive';
import {Ng4LoadingSpinnerComponent} from './ng4-loading-spinner/ng4-loading-spinner.component';

@NgModule({
  declarations: [
    Ng4AlertComponent,
    Ng4LoadingSpinnerComponent,
    Ng4PlaceholderDirective,
    DropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Ng4AlertComponent,
    Ng4LoadingSpinnerComponent,
    Ng4PlaceholderDirective,
    DropdownDirective,
    CommonModule
  ],
  entryComponents: [Ng4AlertComponent]
})
export class Ng4SharedModule {}
