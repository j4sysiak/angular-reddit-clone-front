import { Component, OnInit } from '@angular/core';
import {ObservablesUserService} from './observables-user.service';

@Component({
  selector: 'app-assignment-observables',
  templateUrl: './assignment-observables.component.html',
  styleUrls: ['./assignment-observables.component.css']
})
export class AssignmentObservablesComponent implements OnInit {
  userActivated: false;

  constructor(private observablesUserService: ObservablesUserService) { }

  ngOnInit(): void {
    this.observablesUserService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    });
  }

}
