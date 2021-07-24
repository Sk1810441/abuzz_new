import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreUtility } from 'src/app/utils/store-utility';
import { BookingHistoryReducerState } from './../reducers/bookinghistory.reducer';

const getBookingHistoryFeatureState = createFeatureSelector<BookingHistoryReducerState>('bookinghistory');

export const getBookingHistoryLoaded = createSelector(
    getBookingHistoryFeatureState,
    state => state.loaded
)

export const getBookingHistoryLoading = createSelector(
    getBookingHistoryFeatureState,
    state => state.loading
)

export const getError = createSelector(
    getBookingHistoryFeatureState,
    state => state.error
)

export const getBookingHistorysId = createSelector(
    getBookingHistoryFeatureState,
    state =>state.ids
)



export const getBookingHistorys = createSelector(
    getBookingHistoryFeatureState,
    state => StoreUtility.unNormalized(state.entities)
)

export const getCurrentLocation = createSelector(
    getBookingHistoryFeatureState,
    state => state.currententity
)

// export const getLocation = (id:any) => createSelector(
//     getBookingHistoryFeatureState,
//     state => state.entities[id]
// );



