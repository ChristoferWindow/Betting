import {Action, ActionReducerMap, createReducer, createSelector, on, State} from '@ngrx/store';
import {BetItem} from '../../interfaces/bet-item';
import {BetsActions, BetsActionTypes} from './bets.actions';

export interface BetsState {
    bets: BetItem[];
}

export const initialState: BetsState = {
    bets:
        [
            {
                _id: 'asdf12',
                teams: {
                    team1: {
                        teamId: 'sadfa',
                        rate: 1,
                    },
                    team2: {
                        teamId: 'asdfs',
                        rate: 1,
                    }
                }
            }
        ]
};

// export const selectAllBets = (state: BetsState) => state.bets;
// export const selectBets = createSelector(
//     selectAllBets,
//     (allBets: BetItem[]) => {
//         return allBets;
//     }
// );

// const reducer = createReducer(
//     initialState,
//     on(createBet, (state, {item}) => ({...state, bets: addItemToList(state.bets, item)})),
//     on(removeBet, (state, {id}) => ({...state, bets: removeItemFromList(state.bets, id)})),
// );

export function BetsReducer(state = initialState, action: BetsActions): BetsState {
    switch (action.type) {
        case BetsActionTypes.ADD_BET:
            return addItemToList(state, action.bet);
        default:
            return state;
    }
}


function removeItemFromList(list: BetItem[], id: string): BetItem[] {
    return list.filter((element) => {
        return element._id !== id;
    });
}

function addItemToList(state: BetsState, item: BetItem): BetsState {
    state.bets.concat(item);

    return state;
}

//
// export function betsReducer(state = initialState, action: Action): BetsState {
//     return reducer(state, action);
// }
