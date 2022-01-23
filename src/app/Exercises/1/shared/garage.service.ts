import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

import {Garage} from './garage.model';

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
}
