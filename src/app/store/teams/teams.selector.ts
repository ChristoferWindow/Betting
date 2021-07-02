import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {TeamsReducer, TeamsState} from './teams.reducer';
import {TeamsActions} from './teams.actions';
import * as fromTeamsState from './teams.reducer';

export interface AppTeamsState {
    teams: fromTeamsState.TeamsState;
}

export const getTeamsState = createFeatureSelector<TeamsState>('teams');

export const getTeams = createSelector(
    getTeamsState,
    (state: TeamsState) => state.teams
);

export const teamsReducer: ActionReducerMap<AppTeamsState, TeamsActions> = {
    teams: TeamsReducer
};
