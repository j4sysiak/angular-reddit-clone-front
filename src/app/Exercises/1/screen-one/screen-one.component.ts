import { Component, OnInit } from '@angular/core';
import {Car} from '../shared/car.model';
import {CarsService} from '../shared/cars.service';

@Component({
  selector: 'app-screen-one',
  templateUrl: './screen-one.component.html',
  styleUrls: ['./screen-one.component.css']
})
export class ScreenOneComponent implements OnInit {
  cars: Car[];

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.cars = this.carsService.getCars();
  }

  onEditItem(i: number) {

  }
}
