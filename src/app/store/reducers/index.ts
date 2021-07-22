import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromLocation from './location.reducer';
import * as fromProfile from './profile.reducer';
import * as fromBookingHistory from './bookinghistory.reducer';

export interface State {

  [fromLocation.locationFeatureKey]: fromLocation.LocationReducerState,
 
  [fromProfile.profileFeatureKey]:fromProfile.profileReducerState,
  [fromBookingHistory.bookinghistoryFeatureKey]: fromBookingHistory.BookingHistoryReducerState,

}

export const reducers: ActionReducerMap<State> = {

  [fromLocation.locationFeatureKey]: fromLocation.LocationReducer,
  [fromBookingHistory.bookinghistoryFeatureKey]: fromBookingHistory.BookingHistoryReducer,
  [fromProfile.profileFeatureKey]:fromProfile.profileReducer,

};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
