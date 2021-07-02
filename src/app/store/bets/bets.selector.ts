import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {BetsReducer, BetsState} from './bets.reducer';
import {BetsActions} from './bets.actions';
import * as fromBetsState from './bets.reducer';
import {BetItem} from '../../interfaces/bet-item';

export interface AppBetsState {
    bets: fromBetsState.BetsState;
}

export const getBetsState = createFeatureSelector<BetsState>('bets');

export const getBets = createSelector(
    getBetsState,
    (state: BetsState) => state.bets
);

export const getBetsByTeamId = (id: string) => createSelector(getBetsState, (allItems: BetsState) => {
    const bets: BetItem[] = allItems.bets;
    if (bets) {
        console.log('ste');
        console.log(bets);
        return bets.filter(item => {
            const teams = item.teams;

            return teams.team1.teamId === id || teams.team2.teamId === id;
        });
    } else {
        return {};
    }
});

export const betsReducer: ActionReducerMap<AppBetsState, BetsActions> = {
    bets: BetsReducer
};
