import {Action} from '@ngrx/store';
import {TeamItem} from '../../interfaces/team-item';

export enum TeamsActionTypes {
    GET_TEAM = '[GET TEAM]',
    ADD_TEAM = '[ADD TEAM]',
    UPDATE_TEAM = '[UPDATE TEAM]',
    DELETE_TEAM = '[DELETE TEAM]',
}

export class AddTeamAction implements Action {
    public readonly type = TeamsActionTypes.ADD_TEAM;

    constructor(public team: TeamItem) {
        console.log('sdf');
    }
}

export class RemoveTeamAction implements Action {
    public readonly type = TeamsActionTypes.DELETE_TEAM;

    constructor(public teamId: string) {
    }
}

export class GetTeams implements Action {
    readonly type = TeamsActionTypes.GET_TEAM;
}

export class UpdateTeam implements Action {
    readonly type = TeamsActionTypes.UPDATE_TEAM;

    constructor(public  team: TeamItem) {
    }
}

export type TeamsActions = AddTeamAction | RemoveTeamAction | GetTeams | UpdateTeam;
