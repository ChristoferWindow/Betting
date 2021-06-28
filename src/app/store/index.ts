import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {betsReducer, BetsState} from '../bets.reducer';

export interface State {
    betsList: BetsState;
}

export const reducers: ActionReducerMap<State> = {
    betsList: betsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
