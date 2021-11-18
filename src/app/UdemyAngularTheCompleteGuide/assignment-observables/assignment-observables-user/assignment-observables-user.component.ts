import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-assignment-observables-user',
  templateUrl: './assignment-observables-user.component.html',
  styleUrls: ['./assignment-observables-user.component.css']
})
export class AssignmentObservablesUserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

}
