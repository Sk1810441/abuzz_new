import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { profileDetails } from '../models/userprofile';
import * as ProfileAction from '../../store/actions/profile.actions';
import * as fromProfile from '../../store/selectors/profile.selectors';
import { take, takeUntil } from 'rxjs/operators';
import { ProfileService } from '../services/profile.service';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable()

export class profileRepository {

    constructor(private store: Store<any>, private profileService: ProfileService, private authservice: AuthService) { }

    isLoading: boolean = false;
    source = environment.source;
    UserDetails: profileDetails | undefined;

    getProfileDetails(force = false): [Observable<boolean>, Observable<profileDetails>, Observable<boolean>, Observable<boolean>] {
        const loading$ = this.store.select(fromProfile.getProfileLoding);
        const loaded$ = this.store.select(fromProfile.getProfileLoded);
        const getProfileData$ = this.store.select(fromProfile.getProfileDetails);
        const getError$ = this.store.select(fromProfile.getError);

        combineLatest([loaded$, loading$]).pipe(take(1)).subscribe((data) => {
            if ((!data[0] && !data[1]) || force) {
                this.store.dispatch(new ProfileAction.LoadProfiles());
                let userId = Number(this.authservice.getuserid());
                let token = this.authservice.getjwtToken();
                this.profileService.getProfile(userId, this.source, token).subscribe(res => {
                    if(res.statusDescription.statusCode == 200){
                        this.store.dispatch(new ProfileAction.LoadProfilesSuccess({ data: res.userDetails }));
                    }else{
                        this.store.dispatch(new ProfileAction.LoadProfilesFailure({ errorMessaage: res.statusDescription.statusMessage }));
                    }
                },
                error => {
                    this.store.dispatch(new ProfileAction.LoadProfilesFailure({ errorMessaage: "Somethings wents wrong" }));
                });
            }
        });
        return [loading$, getProfileData$, getError$, loaded$];
    }

   
    updateProfileDetails(userId:number,form:any): [Observable<boolean>, Observable<profileDetails>, Observable<boolean>, Observable<boolean>] {
        const loading$ = this.store.select(fromProfile.getProfileLoding);
        const loaded$ = this.store.select(fromProfile.getProfileLoded);
        const getProfileData$ = this.store.select(fromProfile.getProfileDetails);
        const getError$ = this.store.select(fromProfile.getError);

        combineLatest([loaded$, loading$]).pipe(take(1)).subscribe((data) => {
            if (true){
                // console.log("san2");
            this.store.dispatch(new ProfileAction.LoadProfiles());
            let userId = Number(this.authservice.getuserid());
            this.profileService.updateProfileDetails(userId,form).subscribe(res => {
                // console.log("respo"+res);
                this.store.dispatch(new ProfileAction.LoadUpdateProfileDetails({data: res.userDetails }));
            },
            error => {
                this.store.dispatch(new ProfileAction.LoadProfilesFailure({ errorMessaage: "Somethings wents wrong" }));
            });
            }
        });
        
        return [loading$, getProfileData$, getError$, loaded$];
    }


}
