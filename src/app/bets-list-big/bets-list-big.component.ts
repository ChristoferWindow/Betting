import {Component, OnInit} from '@angular/core';
import {BetItem} from '../interfaces/bet-item';
import {createBet, removeBet} from '../bets.actions';
import {Observable} from 'rxjs';
import {State, Store} from '@ngrx/store';

@Component({
    selector: 'app-bets-list-big',
    templateUrl: './bets-list-big.component.html',
    styleUrls: ['./bets-list-big.component.scss']
})

@Component({
    selector: 'app-bet-item',
    templateUrl: './bet-item.component.html',
    styleUrls: ['./bet-item.component.scss']
})
export class BetListBigComponent implements OnInit {

    betList: Observable<BetItem[]>;

    constructor(private store: Store<State<any>>) {
        const item: BetItem = {
            _id: uuid(),
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

        this.betList = this.store.dispatch(createBet({item}));
    }

    ngOnInit(): void {
    }

    addItem(bet: BetItem): void {
        this.store.dispatch(createBet({
            item: bet
        }));
        // this.todoListService.addItem({title});
    }

    removeItem(item): void {
        this.store.dispatch(removeBet({id: item._id}));
        // this.todoListService.deleteItem(item);
    }

    // updateItem(item, changes): void {
    //     this.store.dispatch(changeCompletedStatus({id: item._id, completed: changes}));
    //     // this.todoListService.updateItem(item, changes);
    // }
}

