import {Action, createAction, props} from '@ngrx/store';
import {BetItem} from '../../interfaces/bet-item';

export enum BetsActionTypes {
    GET_BET = '[GET BET]',
    GET_BET_SUCCESS = '[GET_BET] SUCCESS',
    GET_BET_FAILURE = '[GET_BET] FAILURE',

    ADD_BET = '[ADD BET]',
    ADD_BET_SUCCESS = '[ADD_BET] SUCCESS',
    ADD_BET_FAILURE = '[ADD_BET] FAILURE',

    UPDATE_BET = '[UPDATE BET]',
    UPDATE_BET_SUCCESS = '[UPDATE_BET] SUCCESS',
    UPDATE_BET_FAILURE = '[UPDATE_BET] FAILURE',

    DELETE_BET = '[DELETE BET]',
    DELETE_BET_SUCCESS = '[DELETE_BET] SUCCESS',
    DELETE_BET_FAILURE = '[DELETE_BET] FAILURE',
}

export class GetBets implements Action {
    readonly type = BetsActionTypes.GET_BET;
}

export const createBet = createAction(
    '[Bets Component] Create',
    props<{item: BetItem}>(),
);
export const removeBet = createAction(
    '[Bets Component] Delete',
    props<{id: string}>(),
);
export const updateBet = createAction('[Bets Component] Update');
export const resetBet = createAction('[Bets Component] Reset');
