import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

import {Garage} from './garage.model';
import {Ng4Recipe} from '../../../UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe.model';

@Injectable({
  providedIn: 'root'
})
export class GarageService {
  garageChanged = new Subject<Garage>();
  private garages: Garage[] = [];

  constructor() { }

  getGarages() {
    return this.garages.slice();
  }

  getGarage(i: number) {
    // return this.garages.slice()[i];
    return this.garages[i];
  }

  addGarage(garage: Garage) {
    this.garages.push(garage);
    // @ts-ignore
    this.garageChanged.next(this.garages.slice());
  }

  updateGarage(i: number, newGarage: Garage) {
    this.garages[i] = newGarage;
    // @ts-ignore
    this.garageChanged.next(this.garages.slice());
  }

}
