import { createSelector } from '@ngrx/store';
import {BetsState} from './bets.reducer';
import {State} from './store';

export const getRootState = (state: State) => state.betsList;

export const getBetItems = createSelector(
    getRootState,
    (state: BetsState) => state.items
);
