import {Component, OnDestroy, OnInit} from '@angular/core';
import {BetItem} from '../interfaces/bet-item';
import {nanoid} from 'nanoid';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BetsState} from '../store/bets/bets.reducer';
import {Store} from '@ngrx/store';
import {AddBetAction} from '../store/bets/bets.actions';
import {Subscription} from 'rxjs';
import {BetsService} from '../services/bets-service';
import * as fromBets from '../store/bets/bets.selector';
import {TeamItem} from '../interfaces/team-item';
import {TeamsState} from '../store/teams/teams.reducer';
import * as fromTeams from '../store/teams/teams.selector';

@Component({
    selector: 'app-bet-create',
    templateUrl: './bet-create.component.html',
    styleUrls: ['./bet-create.component.scss']
})
export class BetCreateComponent implements OnInit, OnDestroy {

    betCreateGroup: FormGroup = this.fb.group({
        team1: ['', Validators.required],
        team1Rate: ['', Validators.required],
        team2: ['', Validators.required],
        team2Rate: ['', Validators.required],
        draw: ['', Validators.required],
    });

    public teamsList: TeamItem[] | undefined;
    public teamsSubscription: Subscription | undefined;

    constructor(private fb: FormBuilder, private store: Store<BetsState>, private teamsStore: Store<TeamsState>) {
    }

    ngOnInit(): void {
        this.teamsSubscription = this.store.select(fromTeams.getTeams).subscribe((teams) => {
            this.teamsList = teams;
        });
    }
    ngOnDestroy(): void {
        this.teamsSubscription?.unsubscribe();
    }

    submitValue(): void {
        if (this.betCreateGroup.valid) {
            const betItem: BetItem = {
                _id: nanoid(),
                teams: {
                    team1: {
                        teamId: this.betCreateGroup.get('team1')?.value,
                        rate: this.betCreateGroup.get('team1Rate')?.value
                    }, team2: {
                        teamId: this.betCreateGroup.get('team2')?.value,
                        rate: this.betCreateGroup.get('team2Rate')?.value
                    }
                },
                draw: this.betCreateGroup.get('draw')?.value
            };
            // alert(betItem.teams.team1.teamId);
            console.log(betItem, 'betItem');
            this.store.dispatch(new AddBetAction(betItem));
            this.betCreateGroup.reset();
        }
    }
}
