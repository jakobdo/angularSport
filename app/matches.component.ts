import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Match } from './match';
import { MatchService } from './match.service';

@Component({
  templateUrl: 'app/matches.component.html'
})

export class MatchesComponent implements OnInit {
  matches: Match[];

  constructor(
    private _matchService: MatchService,
    private _routeParams: RouteParams
  ) { }

  getMatches() {
    this._matchService.getMatches().then(matches => this.matches = matches);
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this.getMatches();
  }
}
