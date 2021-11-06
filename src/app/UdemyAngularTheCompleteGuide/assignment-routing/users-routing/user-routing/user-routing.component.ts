import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-routing',
  templateUrl: './user-routing.component.html',
  styleUrls: ['./user-routing.component.css']
})
export class UserRoutingComponent implements OnInit {
  userRouting: {id: number, name: string};

  constructor() { }

  ngOnInit() {
  }

}
