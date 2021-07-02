import * as fromTeamsState from './teams/teams.reducer';
import * as fromBetsState from './bets/bets.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
    teams: fromTeamsState.TeamsState;
    bets: fromBetsState.BetsState;
}

export const appReducer: ActionReducerMap<AppState, any> = {
    teams: fromTeamsState.TeamsReducer,
    bets: fromBetsState.BetsReducer
};
