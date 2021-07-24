import { Action } from '@ngrx/store';
import { bookingDetails } from '../models/bookinghistory';

export enum BookingHistoryActionTypes {
  LoadBookingHistorys = '[BookingHistory] Load BookingHistorys',
  LoadBookingHistorysSuccess = '[BookingHistory] Load BookingHistorys Success',
  LoadBookingHistorysFailure = '[BookingHistory] Load BookingHistorys Failure',
  LoadCurrentBookingHistory = '[BookingHistory] Load Current BookingHistory',
}

export class LoadBookingHistorys implements Action {
  readonly type = BookingHistoryActionTypes.LoadBookingHistorys;
}

export class LoadBookingHistorysSuccess implements Action {
  readonly type = BookingHistoryActionTypes.LoadBookingHistorysSuccess;
  constructor(public payload: { data: bookingDetails[] }) { }
}

export class LoadBookingHistorysFailure implements Action {
  readonly type = BookingHistoryActionTypes.LoadBookingHistorysFailure;
  constructor(public payload: { errorMessaage: string }) { }
}

export class LoadCurrentBookingHistory implements Action {
  readonly type = BookingHistoryActionTypes.LoadCurrentBookingHistory
  constructor(public payload: { currentdata: bookingDetails }) { }
}