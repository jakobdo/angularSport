import {Injectable} from 'angular2/core';
import {Match} from './match';
import {MATCHES} from './mock-matches';

@Injectable()
export class MatchService {
  getMatches() {
    return Promise.resolve(MATCHES);
  }

  getMatch(id: number) {
    return Promise.resolve(MATCHES).then(
      matches => matches.filter(match => match.id === id)[0]
    );
  }
}
