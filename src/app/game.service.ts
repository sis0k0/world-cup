import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Game } from './game';
// const games = require("./games.json");

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private static API_URL = 'https://worldcup.sfg.io/matches';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Game[]> {
    // return of(games)
    return this.httpClient.get<any>(GameService.API_URL)
      .pipe(
        map(apiGames => {
          return apiGames
            .map(game => {
              const started = game.status !== 'future';
              const isGoal = event => ['goal', 'goal-penalty'].includes(event.type_of_event);
              const filterGoals = events => events.filter(isGoal);
              const addTeam = (goal, team) => Object.assign(goal, { team });
              const goals = started ?
                [
                  ...filterGoals(game.home_team_events).map(goal => addTeam(goal, 'home')),
                  ...filterGoals(game.away_team_events).map(goal => addTeam(goal, 'away')),
                ]
                  .sort((a, b) => parseInt(a.time) - parseInt(b.time)) :
                [];

              const { home_team, away_team } = game;

              return Object.assign({}, {
                team1: home_team.country,
                team2: away_team.country,
                score1: started ? home_team.goals : '-',
                score2: started ? away_team.goals : '-',
                goals,
              });
            })
            .reverse()
          }
      ));
  }
}


