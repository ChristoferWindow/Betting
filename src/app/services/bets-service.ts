import {Store} from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import {BetItem} from '../interfaces/bet-item';
import {Injectable} from '@angular/core';
import {BetsState} from '../store/bets/bets.reducer';

@Injectable({
    providedIn: 'root'
})
export class BetsService {
    private betListSubject: Subject<BetItem[]> = new Subject<BetItem[]>();

    betStore: Observable<BetItem[]>;

    constructor(private store: Store<BetsState>) {
        this.retrieveListFromStore();
        this.betStore = store.select('bets');
    }

    retrieveListFromStore(): void {
        this.store.select('bets').subscribe(value => this.betListSubject.next(value));
    }

    getBetsList(): Observable<BetItem[]> {
        return this.betListSubject.asObservable();
    }
}
