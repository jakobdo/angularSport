import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { DashboardComponent } from './dashboard.component';
import { SportService } from './sport.service';
import { SportComponent } from './sport.component';
import { MatchService } from './match.service';
import { MatchesComponent } from './matches.component';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <sport-nav></sport-nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES, SportComponent],
  providers: [
    ROUTER_PROVIDERS,
    SportService,
    MatchService
  ]
})

@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/sport/:id',
    name: 'Matches',
    component: MatchesComponent
  }
])

export class AppComponent { }
