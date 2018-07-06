import { Component } from '@angular/core';

import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapp';
  games = [];

  constructor(private gameService: GameService) {
    this.gameService.getAll().subscribe((games) => {
      this.games = games;
    });
  }

  getScoreString(game) {
    const { team1, team2, score1, score2 } = game;
    return `${team1} ${score1} : ${score2} ${team2}`;
  }
}
