import { ActionReducerMap } from '@ngrx/store';
import { BannersEffects } from './effects/banners.effects';
import { BannersState, bannersReducer } from './reducers/banners.reducer';

export interface State {
  banners: BannersState;
}

export const reducers: ActionReducerMap<State> = {
  banners: bannersReducer,
};

export const effects = [BannersEffects];
