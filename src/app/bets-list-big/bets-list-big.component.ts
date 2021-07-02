import {Component, OnDestroy, OnInit} from '@angular/core';
import {BetItem} from '../interfaces/bet-item';
import {Subscription} from 'rxjs';
import {BetsService} from '../services/bets-service';
import {Store} from '@ngrx/store';
import {BetsState} from '../store/bets/bets.reducer';
import * as fromBets from '../store/bets/bets.selector';

@Component({
    selector: 'app-bets-list-big',
    templateUrl: './bets-list-big.component.html',
    styleUrls: ['./bets-list-big.component.scss']
})

export class BetsListBigComponent implements OnInit, OnDestroy {

    public betsList: BetItem[] | undefined;

    public betsSubscription$: Subscription | undefined;

    constructor(private betsService: BetsService, private store: Store<BetsState>) {
    }

    ngOnInit(): void {
        this.betsSubscription$ = this.store.select(fromBets.getBets).subscribe((bets) => {
            this.betsList = bets;
        });
    }

    ngOnDestroy(): void {
        this.betsSubscription$?.unsubscribe();
    }
}

