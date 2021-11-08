import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user-routing',
  templateUrl: './user-routing.component.html',
  styleUrls: ['./user-routing.component.css']
})
export class UserRoutingComponent implements OnInit {
  userRouting: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.userRouting = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.route.params
      .subscribe(
        (params: Params) => {
          this.userRouting.id = params['id'];
          this.userRouting.name = params['name'];
        }
      );
  }

}
