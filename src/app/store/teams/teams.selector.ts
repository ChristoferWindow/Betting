import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {TeamsReducer, TeamsState} from './teams.reducer';
import {TeamsActions} from './teams.actions';
import * as fromTeamsState from './teams.reducer';
import {TeamItem} from '../../interfaces/team-item';

export interface AppTeamsState {
    teams: fromTeamsState.TeamsState;
}

export const getTeamsState = createFeatureSelector<TeamsState>('teams');

export const getTeams = createSelector(
    getTeamsState,
    (state: TeamsState) => state.teams
);

export const getTeamById = (id: string) => createSelector(getTeamsState, (allItems: TeamsState) => {
    const teams: TeamItem[] = allItems.teams;
    if (teams) {
        console.log('ste');
        console.log(teams);
        return teams.find(item => {
            return item._id === id;
        });
    } else {
        return {};
    }
});

export const teamsReducer: ActionReducerMap<AppTeamsState, TeamsActions> = {
    teams: TeamsReducer
};
