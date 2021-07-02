import {BetItem} from '../../interfaces/bet-item';
import {BetsActions, BetsActionTypes} from './bets.actions';
import {nanoid} from 'nanoid';

export interface BetsState {
    bets: BetItem[];
}

export const initialState: BetsState = {bets: [
        {
            _id: nanoid(),
            teams: {
                team1: {
                    teamId: '1111',
                    rate: 2
                },
                team2: {
                    teamId: '1112',
                    rate: 1
                }
            }
        },
        {
            _id: nanoid(),
            teams: {
                team1: {
                    teamId: '1112',
                    rate: 5
                },
                team2: {
                    teamId: '1114',
                    rate: 3
                }
            }
        },
        {
            _id: nanoid(),
            teams: {
                team1: {
                    teamId: '1111',
                    rate: 2
                },
                team2: {
                    teamId: '1113',
                    rate: 5
                }
            }
        }
    ]};

export function BetsReducer(state = initialState, action: BetsActions): BetsState {
    switch (action.type) {
        case BetsActionTypes.ADD_BET:
            return addItemToList(state, action.bet);
        case BetsActionTypes.DELETE_BET:
            return removeItemFromList(state, action.betId);
        case BetsActionTypes.UPDATE_BET:
            return updateItem(state, action.bet);
        default:
            return state;
    }
}

function removeItemFromList(state: BetsState, id: string): BetsState {
    const list: BetItem[] = state.bets;

    list.filter((element) => {
        return element._id !== id;
    });

    return {...state, bets: list};
}

function addItemToList(state: BetsState, item: BetItem): BetsState {
    return {...state, bets: state.bets.concat(item)};
}

function updateItem(state: BetsState, betItem: BetItem): BetsState {
    const list: BetItem[] = state.bets;

    list.map(value => {
        if (value._id === betItem._id) {
            return {
                betItem
            };
        } else {
            return value;
        }
    });

    return {...state, bets: list};
}
