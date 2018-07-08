import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailsRouteComponent } from './game-details-route.component';

describe('GameDetailsRouteComponent', () => {
  let component: GameDetailsRouteComponent;
  let fixture: ComponentFixture<GameDetailsRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDetailsRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetailsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
