import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app-routing.module.tns';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { GameService } from './game.service';
import { GamesListComponent } from './games-list/games-list.component';
import { ScoreComponent } from './score/score.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameDetailsRouteComponent } from './game-details-route/game-details-route.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    GamesListComponent,
    ScoreComponent,
    GameDetailsComponent,
    GameDetailsRouteComponent,
  ],
  providers: [
    GameService,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
