import { Action } from './../actions/index.action';
import { LocationActionTypes } from '../actions/location.actions';
import { Location } from '../models/location';
import { StoreUtility } from 'src/app/utils/store-utility';


export const locationFeatureKey = 'location';

export interface LocationReducerState {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  errorMessage : string;
  entities: { [id: number]: Location };
  ids: number[];
  currententity:Location;
  cities: string[];
}

export const initialState: LocationReducerState = {
  loaded: false,
  loading: false,
  error: false,
  errorMessage : "",
  entities: {},
  ids: [],
  currententity:new Location(),
  cities: []
};


export function LocationReducer(state = initialState, action: Action): LocationReducerState{

  switch(action.type){

    case LocationActionTypes.LoadLocations:{
      return {...state, loading: true};
    }

    case LocationActionTypes.LoadLocationsSuccess:{
      const locations = action.payload.data;
      const obj = StoreUtility.normalize(locations);
      const newEntities = {...state.entities, ...obj};
      const ids = locations.map((location: { id: any; }) => location.id);
      const newIds = StoreUtility.filterDuplicateIds([...state.ids, ...ids]);
      const citys = locations.map((location: { city: any; }) => location.city);
      const newcities = StoreUtility.filterDuplicatecitys([...state.cities, ...citys]);
      return { ...state, ...{ loaded: true, loading: false, error: false,  entities: newEntities, ids: newIds,cities:newcities } };
    }

    case LocationActionTypes.LoadLocationsFailure:{
      const errorMessaage = action.payload.data;
      return { ...state,error: true,loading: false,errorMessage:errorMessaage}
    }

    case LocationActionTypes.LoadCurrentLocation: {
      const location = action.payload.currentdata;
      return {...state, currententity: location};
    }

    default:{
      return {...state};
    }

  }
}
