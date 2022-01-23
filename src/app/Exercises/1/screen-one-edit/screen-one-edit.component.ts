import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

import {CarsService} from '../shared/cars.service';
import {Car} from '../shared/car.model';

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

  onSubmit(f: NgForm) {

  }

  onDelete() {

  }

  onClear() {

  }
}
