import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { profileReducerState } from '../reducers/profile.reducer';


const getProfileFeatureState =createFeatureSelector<profileReducerState>('profile');

export const getProfileLoded =createSelector(
    getProfileFeatureState,
    State=>State.loaded
)

export const getProfileLoding=createSelector(
    getProfileFeatureState,
    State=>State.loading
)

export const getError=createSelector(
    getProfileFeatureState,
    State=>State.error
)

export const getProfileDetails =createSelector(
    getProfileFeatureState,
    State=> State.entities
)
