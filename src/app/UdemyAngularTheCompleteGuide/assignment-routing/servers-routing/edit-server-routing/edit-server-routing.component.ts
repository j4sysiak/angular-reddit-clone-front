import { Component, OnInit } from '@angular/core';
import {ServersRoutingService} from '../servers-routing.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-server-routing',
  templateUrl: './edit-server-routing.component.html',
  styleUrls: ['./edit-server-routing.component.css']
})
export class EditServerRoutingComponent implements OnInit {
  serverRouting: {id: number, name: string, status: string};
  serverRoutingName = '';
  serverRoutingStatus = '';

  constructor(private serversRoutingService: ServersRoutingService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();
    this.serverRouting = this.serversRoutingService.getServerRouting(1);
    this.serverRoutingName = this.serverRouting.name;
    this.serverRoutingStatus = this.serverRouting.status;
  }

  onUpdateServerRouting() {
    this.serversRoutingService.updateServerRouting(this.serverRouting.id, {name: this.serverRoutingName, status: this.serverRoutingStatus});
  }

}
