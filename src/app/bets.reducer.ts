import {Action, createReducer, on, State} from '@ngrx/store';
import {createBet, removeBet, updateBet} from './bets.actions';
import {BetItem} from './interfaces/bet-item';

export interface BetsState {
    items: BetItem[];
}


export const initialState: BetsState = {
    items: []
};

const reducer = createReducer(
    initialState,
    on(createBet, (state, {item}) => ({...state, items: state.items.concat(item)})),
    on(removeBet, (state, {id}) => ({...state, items: removeItemFromList(state.items, id)})),
);


function removeItemFromList(list: BetItem[], id: string): BetItem[] {
    return list.filter((element) => {
        return element._id !== id;
    });
}

// tslint:disable-next-line:typedef
export function betsReducer(state: BetsState | undefined, action: Action) {
    return reducer(state, action);
}
