import {Action, createReducer, createSelector, on} from '@ngrx/store';
import {createBet, removeBet} from './bets.actions';
import {BetItem} from '../../interfaces/bet-item';

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

export const selectAllBets = (state: BetsState) => state.bets;
export const selectBets = createSelector(
    selectAllBets,
    (allBets: BetItem[]) => {
        return allBets;
    }
);

const reducer = createReducer(
    initialState,
    on(createBet, (state, {item}) => ({...state, bets: addItemToList(state.bets, item)})),
    on(removeBet, (state, {id}) => ({...state, bets: removeItemFromList(state.bets, id)})),
);


function removeItemFromList(list: BetItem[], id: string): BetItem[] {
    return list.filter((element) => {
        return element._id !== id;
    });
}

function addItemToList(items: BetItem[], item: BetItem): BetItem[] {
    console.log('added');
    items.concat(item);

    return items;
}

export function betsReducer(state: BetsState | undefined, action: Action): BetsState {
    return reducer(state, action);
}
