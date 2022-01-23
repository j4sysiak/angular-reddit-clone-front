import { Component, OnInit } from '@angular/core';
import {Car} from '../shared/car.model';
import {CarsService} from '../shared/cars.service';
import {Ingredient} from '../../../UdemyAngularTheCompleteGuide/ng4-complete-guide/shared/ingredient.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-screen-one',
  templateUrl: './screen-one.component.html',
  styleUrls: ['./screen-one.component.css']
})
export class ScreenOneComponent implements OnInit {
  private subscription: Subscription;
  cars: Car[];

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.cars = this.carsService.getCars();

    this.subscription = this.carsService.carsChanged2
      .subscribe(
        (cars: Car[]) => {
          this.cars = cars;
        }
      );
  }

  onEditItem(i: number) {
    this.carsService.startedEditing.next(i);
  }
}
