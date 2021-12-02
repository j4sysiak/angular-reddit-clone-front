import {FormControl} from '@angular/forms';

export class CustomValidators {
  static invalidProjectName(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'invalidProjectName': false};
    }
    return null;
  }

}
