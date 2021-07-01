import {Component, OnInit} from '@angular/core';
import {BetItem} from '../interfaces/bet-item';
import {Observable} from 'rxjs';
import {BetsService} from '../services/bets-service';

@Component({
    selector: 'app-bets-list-big',
    templateUrl: './bets-list-big.component.html',
    styleUrls: ['./bets-list-big.component.scss']
})


export class BetsListBigComponent implements OnInit {

    betList: Observable<BetItem[]>;

    constructor(private betsService: BetsService) {
        this.betList = betsService.getBetsList();
        console.log(this.betList);
    }

    ngOnInit(): void {
    }

    removeItem(item: any): void {
        this.betsService.removeItem(item);
    }
}

