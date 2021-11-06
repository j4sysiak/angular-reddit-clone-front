import { Component, OnInit } from '@angular/core';
import {ServersRoutingService} from '../servers-routing.service';

@Component({
  selector: 'app-server-routing',
  templateUrl: './server-routing.component.html',
  styleUrls: ['./server-routing.component.css']
})
export class ServerRoutingComponent implements OnInit {
  serverRouting: {id: number, name: string, status: string};

  constructor(private serversRoutingService: ServersRoutingService) { }

  ngOnInit() {
    this.serverRouting = this.serversRoutingService.getServerRouting(1);
  }

}

