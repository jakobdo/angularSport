import {Component} from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { Sport } from './sport';
import { SportService } from './sport.service';

@Component({
  selector: 'sport-nav',
  templateUrl: 'app/sport.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    SportService
  ]
})

export class SportComponent {
  sports: Sport[];

  constructor(
    private _sportService: SportService
  ) { }

  getSports() {
    this._sportService.getSports().then(sports => this.sports = sports);
  }

  ngOnInit() {
    this.getSports();
  }
}
