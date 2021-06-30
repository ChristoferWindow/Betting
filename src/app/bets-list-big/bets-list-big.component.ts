import {Component, OnInit} from '@angular/core';
import {BetItem} from '../interfaces/bet-item';
import {createBet, removeBet} from '../bets.actions';
import {Observable} from 'rxjs';
import {State, Store} from '@ngrx/store';
import {BetsService} from '../services/bets-service';
import {nanoid} from 'nanoid';

@Component({
    selector: 'app-bets-list-big',
    templateUrl: './bets-list-big.component.html',
    styleUrls: ['./bets-list-big.component.scss']
})


export class BetsListBigComponent implements OnInit {

    betList: Observable<BetItem[]>;

    constructor(private store: Store<State<any>>, private betsService: BetsService) {
        const item: BetItem = {
            _id: nanoid(),
            teams: {
                team1: {
                    teamId: '1',
                    rate: 1
                }, team2: {
                    teamId: '2',
                    rate: 2
                }
            }
        };

        this.betList = this.betsService.getBetsList();
    }

    ngOnInit(): void {
    }

    addItem(bet: BetItem): void {
        this.store.dispatch(createBet({
            item: bet
        }));
    }

    removeItem(item: any): void {
        this.store.dispatch(removeBet({id: item._id}));
    }

    // updateItem(item, changes): void {
    //     this.store.dispatch(changeCompletedStatus({id: item._id, completed: changes}));
    //     // this.todoListService.updateItem(item, changes);
    // }
}

