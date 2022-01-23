import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

import {CarsService} from '../shared/cars.service';
import {Car} from '../shared/car.model';
import {Ingredient} from '../../../UdemyAngularTheCompleteGuide/ng4-complete-guide/shared/ingredient.model';

@Component({
  selector: 'app-screen-one-edit',
  templateUrl: './screen-one-edit.component.html',
  styleUrls: ['./screen-one-edit.component.css']
})
export class ScreenOneEditComponent implements OnInit {
  @ViewChild('f', {static: false}) screenOneForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Car;

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.subscription = this.carsService.startedEditing
      .subscribe((i: number) => {
        this.editedItemIndex = i;
        this.editMode = true;
        this.editedItem = this.carsService.getCar(i);

        this.screenOneForm.setValue({
          make: this.editedItem.make,
          type: this.editedItem.type,
          year: this.editedItem.year
        });
      });
  }

  onDelete() {}
  onClear() {}

  onSubmit(form: NgForm) {
    const value = form.value;
    const newCar = new Car(value.make, value.type, value.year);
    // this.ingredientAdded.emit(newIngredient);
    if (this.editMode) {
      this.carsService.updateCar(this.editedItemIndex, newCar);
    } else {
      this.carsService.addCar(newCar);
    }
    this.editMode = false;
    form.reset();
  }
}
