import {TeamItem} from '../../interfaces/team-item';
import {TeamsActions, TeamsActionTypes} from './teams.actions';
import {nanoid} from 'nanoid';

export interface TeamsState {
    teams: TeamItem[];
}

export const initialState: TeamsState = {
    teams: [
        {
            _id: '1111',
            name: 'SadBasement',
            logo: 'https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
        },
        {
            _id: '1112',
            name: 'Cute dogo',
            logo: 'https://previews.123rf.com/images/ratoca/ratoca1902/ratoca190200003/125283307-funny-small-dog-draw.jpg'
        },
        {
            _id: '1113',
            name: 'CCPR_RULEZ',
            logo: 'https://static3.bigstockphoto.com/3/4/3/large2/343484155.jpg'
        },
        {
            _id: '1114',
            name: 'CockKraków',
            logo: 'https://image.spreadshirtmedia.net/image-server/v1/mp/compositions/T1188A70MPA2649PT10X13Y45D156429263FS1296/views/1,width=550,height=550,appearanceId=70,backgroundColor=FFFFFF,noPt=true/micro-cock-small-cock-cock-cock-funny-humor-etui-na-iphonea-78.jpg'
        },
    ]
};

export function TeamsReducer(state = initialState, action: TeamsActions): TeamsState {
    switch (action.type) {
        case TeamsActionTypes.ADD_TEAM:
            return addItemToList(state, action.team);
        case TeamsActionTypes.DELETE_TEAM:
            return removeItemFromList(state, action.teamId);
        case TeamsActionTypes.UPDATE_TEAM:
            return updateItem(state, action.team);
        default:
            return state;
    }
}

function removeItemFromList(state: TeamsState, id: string): TeamsState {
    const list: TeamItem[] = state.teams;

    list.filter((element) => {
        return element._id !== id;
    });

    return {...state, teams: list};
}

function addItemToList(state: TeamsState, item: TeamItem): TeamsState {
    return {...state, teams: state.teams.concat(item)};
}

function updateItem(state: TeamsState, teamItem: TeamItem): TeamsState {
    const list: TeamItem[] = state.teams;

    list.map(value => {
        if (value._id === teamItem._id) {
            return {
                teamItem
            };
        } else {
            return value;
        }
    });

    return {...state, teams: list};
}
