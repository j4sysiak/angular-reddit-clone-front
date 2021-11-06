import { Component, OnInit } from '@angular/core';
import {ServersRoutingService} from './servers-routing.service';
import {UserRoutingComponent} from '../users-routing/user-routing/user-routing.component';

@Component({
  selector: 'app-servers-routing',
  templateUrl: './servers-routing.component.html',
  styleUrls: ['./servers-routing.component.css']
})
export class ServersRoutingComponent implements OnInit {

  public serversRouting: {id: number, name: string, status: string}[] = [];

  constructor(private serversRoutingService: ServersRoutingService) { }

  ngOnInit() {
    this.serversRouting = this.serversRoutingService.getServersRouting();
  }

}
