import { Component, OnInit } from '@angular/core';

import { GameService } from '../game.service';
import { Game } from '../game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  games: Game[];

  constructor(private gameService: GameService) {
    this.gameService.getAll().subscribe((games) => {
      this.games = games;
    });
  }

  ngOnInit() {
  }
}
