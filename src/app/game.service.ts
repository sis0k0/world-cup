import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games = [
    {
      team1: 'Argentina',
      team2: 'Brazil',
      score1: 1,
      score2: 2,
    },

    {
      team1: 'Argentina',
      team2: 'Brazil',
      score1: 1,
      score2: 2,
    },

    {
      team1: 'Argentina',
      team2: 'Brazil',
      score1: 1,
      score2: 2,
    },

    {
      team1: 'Argentina',
      team2: 'Brazil',
      score1: 1,
      score2: 2,
    },

  ];

  constructor() { }

  getAll() {
    return of(this.games);
  }
}
