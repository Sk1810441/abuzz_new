import { Action } from '@ngrx/store';
import { Location } from '../models/location';


export enum LocationActionTypes {
  LoadLocations = '[Location] Load Locations',
  LoadLocationsSuccess = '[Location] Load Locations Success',
  LoadLocationsFailure = '[Location] Load Locations Failure',
  LoadCurrentLocation = '[Location] Load Current Location',
}

export class LoadLocations implements Action {
  readonly type = LocationActionTypes.LoadLocations;
}

export class LoadLocationsSuccess implements Action {
  readonly type = LocationActionTypes.LoadLocationsSuccess;
  constructor(public payload: { data: Location[] }) { }
}

export class LoadLocationsFailure implements Action {
  readonly type = LocationActionTypes.LoadLocationsFailure;
  constructor(public payload: { errorMessaage: string }) { }
}

export class LoadCurrentLocation implements Action {
  readonly type = LocationActionTypes.LoadCurrentLocation;
  constructor(public payload: { currentdata: Location }) { }
}