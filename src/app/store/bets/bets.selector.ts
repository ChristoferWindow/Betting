import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {BetsReducer, BetsState} from './bets.reducer';
import {BetsActions} from './bets.actions';
import * as fromBetsState from './bets.reducer';

export interface AppBetsState {
    bets: fromBetsState.BetsState;
}

export const getBetsState = createFeatureSelector<BetsState>('bets');

export const getBets = createSelector(
    getBetsState,
    (state: BetsState) => state.bets
);

export const betsReducer: ActionReducerMap<AppBetsState, BetsActions> = {
    bets: BetsReducer
};
