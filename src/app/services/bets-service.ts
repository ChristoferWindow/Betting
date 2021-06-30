import {getBetItems} from '../bets.selector';
import {State} from '../store';
import {Store} from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import {BetItem} from '../interfaces/bet-item';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BetsService {
    private betListSubject: Subject<BetItem[]> = new Subject<BetItem[]>();
    constructor(private store: Store<State>) {
        this.retrieveListFromStore();
    }

    retrieveListFromStore(): void {
        this.store.select(getBetItems).subscribe(value => this.betListSubject.next(value));
    }

    getBetsList(): Observable<BetItem[]> {
        return this.betListSubject.asObservable();
    }
}
