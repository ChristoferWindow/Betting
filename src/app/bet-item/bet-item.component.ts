import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BetItem} from '../interfaces/bet-item';

@Component({
    selector: 'app-bet-item',
    templateUrl: './bet-item.component.html',
    styleUrls: ['./bet-item.component.scss']
})
export class BetItemComponent implements OnInit {
    @Input() item: BetItem;
    @Output() remove: EventEmitter<BetItem> = new EventEmitter();

    constructor() {
        this.item = {
            _id: '',
            teams: {
                team1: {
                    teamId: '',
                    rate: 0,
                },
                team2: {
                    teamId: '',
                    rate: 0,
                },
            }
        };
    }

    ngOnInit(): void {
    }

    removeItem(): void {
        this.remove.emit(this.item);
    }
}
