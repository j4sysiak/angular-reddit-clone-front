import { Component, OnInit } from '@angular/core';

import {Garage} from '../shared/garage.model';
import {Router} from '@angular/router';
import {GarageService} from '../shared/garage.service';

@Component({
  selector: 'app-garage-list',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.css']
})
export class GarageListComponent implements OnInit {
  garage: Garage[] = [];

  constructor(private garageService: GarageService,
              private router: Router) {}

  ngOnInit(): void {
  }

  onNewGarage() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
