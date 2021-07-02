import * as fromTeamsState from './teams/teams.reducer';
import * as fromBetsState from './bets/bets.reducer';
import {ActionReducer, ActionReducerMap, combineReducers} from '@ngrx/store';
import {TeamsReducer} from './teams/teams.reducer';
import {BetsReducer} from './bets/bets.reducer';

export interface AppState {
    teams: fromTeamsState.TeamsState;
    bets: fromBetsState.BetsState;
}

export const appReducer = combineReducers({TeamsReducer, BetsReducer});
