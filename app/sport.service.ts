import {Injectable} from 'angular2/core';
import {Sport} from './sport';
import {SPORTS} from './mock-sports';

@Injectable()
export class SportService {
  getSports() {
    return Promise.resolve(SPORTS);
  }

  getSport(id: number) {
    return Promise.resolve(SPORTS).then(
      sports => sports.filter(sport => sport.id === id)[0]
    );
  }
}
