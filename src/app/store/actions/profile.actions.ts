import { Action } from '@ngrx/store';
import { profileDetails } from '../models/userprofile';

export enum ProfileActionTypes {
  LoadProfiles = '[Profile] Load Profiles',
  LoadProfilesSuccess = '[Profile] Load Profiles Success',
  LoadProfilesFailure = '[Profile] Load Profiles Failure',
  LoadEditProfile     ='[Profile] Load Profiles Edit',
  LoadUpdateProfileDetails ='[Profile] Load Profiles update' ,
}

export class LoadProfiles implements Action {
  readonly type = ProfileActionTypes.LoadProfiles;
}

export class LoadProfilesSuccess implements Action {
  readonly type = ProfileActionTypes.LoadProfilesSuccess;
  constructor(public payload: { data: profileDetails }) { }
}

export class LoadProfilesFailure implements Action {
  readonly type = ProfileActionTypes.LoadProfilesFailure;
  constructor(public payload: { errorMessaage: string }) { }
}

export class LoadUpdateProfileDetails implements Action{
    readonly type=ProfileActionTypes.LoadUpdateProfileDetails;
    constructor(public payload:{data:profileDetails}){}
}

export type ProfileActions = LoadProfiles | LoadProfilesSuccess | LoadProfilesFailure|LoadUpdateProfileDetails;

