import {EventEmitter, Injectable} from '@angular/core';
import {Car} from './car.model';
import {Ingredient} from '../../../UdemyAngularTheCompleteGuide/ng4-complete-guide/shared/ingredient.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  carsChanged1 = new EventEmitter<Car[]>();
  carsChanged2 = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private cars: Car[] =  [
    new Car('Toyota', 'Yaris', '2003'),
    new Car('Toyota', 'RAV4', '2006'),
    new Car('Audi', 'B4', '1992')
  ];

  constructor() { }

  getCars() {
    return this.cars.slice();
  }

  getCar(i: number) {
    return this.cars[i];
  }
}
