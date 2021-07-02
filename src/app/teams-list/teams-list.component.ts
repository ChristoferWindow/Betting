import {Component, OnDestroy, OnInit} from '@angular/core';
import {TeamItem} from '../interfaces/team-item';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {TeamsState} from '../store/teams/teams.reducer';
import * as fromTeams from '../store/teams/teams.selector';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit, OnDestroy {

  public teamsList: TeamItem[] | undefined;

  public teamsSubscription$: Subscription | undefined;

  constructor(private store: Store<TeamsState>) {
  }

  ngOnInit(): void {
    this.teamsSubscription$ = this.store.select(fromTeams.getTeams).subscribe((teams) => {
      this.teamsList = teams;
    });
  }

  ngOnDestroy(): void {
    this.teamsSubscription$?.unsubscribe();
  }

}
