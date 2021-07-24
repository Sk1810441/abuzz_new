import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreUtility } from 'src/app/utils/store-utility';
import { LocationReducerState } from './../reducers/location.reducer';

const getLocationFeatureState = createFeatureSelector<LocationReducerState>('location');

export const getLocationLoaded = createSelector(
    getLocationFeatureState,
    state => state.loaded
)

export const getLocationLoading = createSelector(
    getLocationFeatureState,
    state => state.loading
)

export const getError = createSelector(
    getLocationFeatureState,
    state => state.error
)

export const getLocationsId = createSelector(
    getLocationFeatureState,
    state =>state.ids
)

export const getCities = createSelector(
    getLocationFeatureState,
    state =>state.cities
)

export const getLocations = createSelector(
    getLocationFeatureState,
    state => StoreUtility.unNormalized(state.entities)
)

export const getCurrentLocation = createSelector(
    getLocationFeatureState,
    state => state.currententity
)

export const getLocation = (id:any) => createSelector(
    getLocationFeatureState,
    state => state.entities[id]
);

