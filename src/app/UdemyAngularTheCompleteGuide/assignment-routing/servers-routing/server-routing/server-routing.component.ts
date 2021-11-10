import { Component, OnInit } from '@angular/core';
import {ServersRoutingService} from '../servers-routing.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-server-routing',
  templateUrl: './server-routing.component.html',
  styleUrls: ['./server-routing.component.css']
})
export class ServerRoutingComponent implements OnInit {
  serverRouting: {id: number, name: string, status: string};

  constructor(private serversRoutingService: ServersRoutingService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.serverRouting = this.serversRoutingService.getServerRouting(1);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.serverRouting = this.serversRoutingService.getServerRouting(+params['id']);
        }
      );
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}

