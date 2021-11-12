import { Component, OnInit } from '@angular/core';
import {ServersRoutingService} from '../servers-routing.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-edit-server-routing',
  templateUrl: './edit-server-routing.component.html',
  styleUrls: ['./edit-server-routing.component.css']
})
export class EditServerRoutingComponent implements OnInit {
  serverRouting: {id: number, name: string, status: string};
  serverRoutingName = '';
  serverRoutingStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversRoutingService: ServersRoutingService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams
      .subscribe(
        (queryParams: Params) => {
          this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        }
      );
    this.route.fragment.subscribe();
    this.serverRouting = this.serversRoutingService.getServerRouting(1);
    this.serverRoutingName = this.serverRouting.name;
    this.serverRoutingStatus = this.serverRouting.status;
  }

  onUpdateServerRouting() {
    this.serversRoutingService.updateServerRouting(this.serverRouting.id, {name: this.serverRoutingName, status: this.serverRoutingStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
