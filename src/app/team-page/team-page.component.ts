import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {TeamsState} from '../store/teams/teams.reducer';
import {Store} from '@ngrx/store';
import * as fromTeamSelector from '../store/teams/teams.selector';
import * as fromBetsSelector from '../store/bets/bets.selector';
import {BetsState} from '../store/bets/bets.reducer';

@Component({
    selector: 'app-team-page',
    templateUrl: './team-page.component.html',
    styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit, OnDestroy {
    private id: string | undefined;
    private subscriber: Subscription | undefined;
    public teamDetails: any;
    public teamBets: any;

    constructor(
        private route: ActivatedRoute,
        private store: Store<TeamsState>,
        private betsStore: Store<BetsState>
    ) {
        console.log('sdf1');
    }

    ngOnInit(): void {
        console.log('sdf');
        this.subscriber = this.route.params.subscribe(params => {
            console.log(params);
            this.id = params.id;
        });

        if (this.id) {
            this.store.select(fromTeamSelector.getTeamById(this.id)).subscribe((team) => {
                console.log(team);
                this.teamDetails = team;
            });

            this.betsStore.select(fromBetsSelector.getBetsByTeamId(this.id)).subscribe((bets) => {
                this.teamBets = bets;
            });
        }
    }

    ngOnDestroy(): void {
        if (this.subscriber) {
            this.subscriber.unsubscribe();
        }
    }
}
