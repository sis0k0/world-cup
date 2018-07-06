import { Component, OnInit, Input } from '@angular/core';

import { Game } from '../game';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() game: Game;
  score: string;

  constructor() {
  }

  ngOnInit() {
    const { team1, team2, score1, score2 } = this.game;
    this.score = `${team1} ${score1} : ${score2} ${team2}`;
  }
}
