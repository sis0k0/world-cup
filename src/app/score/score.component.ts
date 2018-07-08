import { Component, OnInit, Input } from '@angular/core';

import { Game } from '../game';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  moduleId: module.id,
})
export class ScoreComponent {
  @Input() game: Game;

  constructor() {
  }

  getScore() {
    const { team1, team2, score1, score2 } = this.game;
    return `${team1} ${score1} : ${score2} ${team2}`;
  }
}
