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
      team1: 'England',
      team2: 'France',
      score1: 3,
      score2: 0,
      goals: [
        {
          goalscorer: "Harry Kane",
          minute: 15,
          teamId: 1,
        },
        {
          goalscorer: "Danny Welbeck",
          minute: 46,
          teamId: 1,
        },
        {
          goalscorer: "James Milner",
          minute: 73,
          teamId: 1,
        },
      ],
    },

    {
      id: 2,
      team1: 'Argentina',
      team2: 'Brazil',
      score1: 1,
      score2: 1,
      goals: [
        {
          goalscorer: 'Leo Messi',
          minute: 13,
          teamId: 0,
        },
        {
          goalscorer: 'Neymar',
          minute: 86,
          teamId: 1,
        },
      ]
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
