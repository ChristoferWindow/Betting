import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBetsListComponent } from './team-bets-list.component';

describe('TeamBetsListComponent', () => {
  let component: TeamBetsListComponent;
  let fixture: ComponentFixture<TeamBetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBetsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
