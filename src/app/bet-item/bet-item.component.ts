import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BetItem} from '../interfaces/bet-item';

@Component({
    selector: 'app-bet-item',
    templateUrl: './bet-item.component.html',
    styleUrls: ['./bet-item.component.scss']
})
export class BetItemComponent implements OnInit {
    @Input() item: BetItem | undefined;
    @Output() remove: EventEmitter<BetItem> = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }
}
