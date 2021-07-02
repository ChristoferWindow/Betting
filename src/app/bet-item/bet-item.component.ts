import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {BetItem} from '../interfaces/bet-item';
import {TeamItem} from '../interfaces/team-item';
import {Store} from '@ngrx/store';
import {TeamsState} from '../store/teams/teams.reducer';
import * as fromTeamSelector from '../store/teams/teams.selector';

export interface BetWithTeamDetails {
    bet: BetItem;
    team1Details: TeamItem;
    team2Details: TeamItem;
}

@Component({
    selector: 'app-bet-item',
    templateUrl: './bet-item.component.html',
    styleUrls: ['./bet-item.component.scss']
})

export class BetItemComponent implements OnInit, OnChanges {
    @Input() item: BetItem | undefined;

    private team1Details: any;
    private team2Details: any;
    public betsWithTeamDetails: BetWithTeamDetails | undefined;

    // @Output() remove: EventEmitter<BetItem> = new EventEmitter();

    constructor(private teamsStore: Store<TeamsState>) {
    }

    ngOnInit(): void {
        if (this.item?.teams.team1.teamId) {
            this.teamsStore.select(fromTeamSelector.getTeamById(this.item.teams.team1.teamId)).subscribe((team) => {
                console.log(team);
                this.team1Details = team;
            });
        }
        if (this.item?.teams.team2.teamId) {
            this.teamsStore.select(fromTeamSelector.getTeamById(this.item.teams.team2.teamId)).subscribe((team) => {
                console.log(team);
                this.team2Details = team;
            });
        }
        this.betsWithTeamDetails = {
            bet: this.item,
            team1Details: this.team1Details,
            team2Details: this.team2Details,
        };
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.item.currentValue) {
            this.item = changes.item.currentValue;
        }
    }

}
