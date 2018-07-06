import { Component, OnInit, Input } from '@angular/core';

import { Game } from '../game';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  @Input() games: Game[];

  constructor() { }

  ngOnInit() {
  }

  getScoreString(game: Game) {
    const { team1, team2, score1, score2 } = game;
    return `${team1} ${score1} : ${score2} ${team2}`;
  }

}
