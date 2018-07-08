import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { GameService } from '../game.service';
import { Game } from '../game';

@Component({
  selector: 'app-game-details-route',
  templateUrl: './game-details-route.component.html',
  styleUrls: ['./game-details-route.component.css'],
  moduleId: module.id,
})
export class GameDetailsRouteComponent implements OnInit {
  public game: Game;

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.gameService.get(id)
          .subscribe(game => this.game = game);
    }
}
