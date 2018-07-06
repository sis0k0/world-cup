import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games: Game[] = [
    {
      id: 1,
      team1: 'Argentina',
      team2: 'Brazil',
      score1: 1,
      score2: 2,
    },

    {
      id: 2,
      team1: 'Argentina',
      team2: 'Brazil',
      score1: 1,
      score2: 2,
    },

    {
      id: 3,
      team1: 'Argentina',
      team2: 'Brazil',
      score1: 1,
      score2: 2,
    },

    {
      id: 4,
      team1: 'Argentina',
      team2: 'Brazil',
      score1: 1,
      score2: 2,
    },

  ];

  constructor() { }

  getAll(): Observable<Game[]> {
    return of(this.games);
  }

  get(id: number): Observable<Game> {
    const game = this.games.find(game => game.id === id);

    return of(game);
  }
}
