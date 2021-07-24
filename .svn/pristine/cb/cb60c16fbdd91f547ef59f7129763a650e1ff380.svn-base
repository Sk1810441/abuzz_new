import { Action } from './../actions/index.action';
import { ProfileActionTypes } from '../actions/profile.actions';

import { profileDetails } from '../models/userprofile';


export const profileFeatureKey = 'profile';

export interface profileReducerState {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  errorMessage :string;
  entities: profileDetails;
}

export const initialState: profileReducerState = {
  loaded:false,
  loading:false,
  error:false,
  errorMessage: "",
  entities: new profileDetails(),
};

export function profileReducer(state = initialState, action: Action): profileReducerState {
  switch (action.type) {

    case ProfileActionTypes.LoadProfiles:{
      return{...state,loading:true}
    }

    case ProfileActionTypes.LoadProfilesSuccess:{
     const profile =action.payload.data;
     const obj = profile;
     const newEntities= {...state.entities,...obj};
     return{...state,...{loaded:true,loading:false,error:false,entities:newEntities}}
    }

    case ProfileActionTypes.LoadProfilesFailure:{
      const errorMessaage = action.payload.errorMessaage;
      return { ...state,error: true,loading: false,errorMessage:errorMessaage}
    } 

    case ProfileActionTypes.LoadEditProfile:{
      const profile =action.payload.data;
      const obj = profile;
      const newEntities= {...state.entities,...obj};
      return{ ...state,...{loaded:true,loading:false,error:false,entities:newEntities}}
    }
    
    case ProfileActionTypes.LoadUpdateProfileDetails:{
      const profile=action.payload.data;
      const obj=profile;
      const newEntities={...obj};
    return{...state,...{loaded:true,loading:false,error:false,entities:newEntities}}
    }
   
    default:
      return {...state};
  }
}
