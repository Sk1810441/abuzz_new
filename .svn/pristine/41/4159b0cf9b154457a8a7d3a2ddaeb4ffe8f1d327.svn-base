import { Action } from './../actions/index.action';
import { BookingHistoryActionTypes } from '../actions/bookinghistory.actions';
import { bookingDetails  } from '../models/bookinghistory';
import { StoreUtility } from 'src/app/utils/store-utility';

export const bookinghistoryFeatureKey = 'bookinghistory';

export interface BookingHistoryReducerState {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  errorMessage: string,
  entities: { [id: number]: bookingDetails };
  currententity:bookingDetails;
  ids: number[];
}

export const initialState: BookingHistoryReducerState = {
  loaded: false,
  loading: false,
  error: false,
  errorMessage: "",
  entities: {},
  currententity:new bookingDetails(),
  ids: [],
};

export function BookingHistoryReducer(state = initialState, action: Action): BookingHistoryReducerState {
  switch (action.type) {

    case BookingHistoryActionTypes.LoadBookingHistorys:{
      return {...state, loading: true};
    }

    case BookingHistoryActionTypes.LoadBookingHistorysSuccess :{
      const bookinghistorys = action.payload.data;
      const obj = StoreUtility.normalize(bookinghistorys);
      const newEntities = {...state.entities, ...obj};
      const ids = bookinghistorys.map((bookingDetails: { id: any; }) => bookingDetails.id);
      const newIds = StoreUtility.filterDuplicateIds([...state.ids, ...ids]);
      return { ...state, ...{ loaded: true, loading: false, error: false,  entities: newEntities, ids: newIds, } };
    }

    case BookingHistoryActionTypes.LoadBookingHistorysFailure:{
      const errorMessaage = action.payload.errorMessaage;
      return { ...state,error: true,loading: false,errorMessage:errorMessaage}
    }

    case BookingHistoryActionTypes.LoadCurrentBookingHistory: {
      const bookinghistory = action.payload.currentdata;
      return {...state, currententity: bookinghistory};
    }

    default:{
      return {...state};
    }
  }

}
