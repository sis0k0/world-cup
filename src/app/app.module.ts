import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { ScoreComponent } from './score/score.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    GameDetailsComponent,
    ScoreComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
