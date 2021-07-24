import {Injectable} from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable} from 'rxjs';
import { LocationService } from './../services/location.service';
import { Location } from './../models/location';
import { take } from 'rxjs/operators';
import * as LocationActions from '../../store/actions/location.actions';
import * as fromLocation from '../../store/selectors/location.selectors';

@Injectable()
export class LocationRepository {
  
  constructor( private store: Store<any> ,  private LocationService: LocationService ) { }

  getLocationsList(force = false): [Observable<Location[]>,Observable<boolean>, Observable<boolean>,Observable<boolean>] {
    const loading$ = this.store.select(fromLocation.getLocationLoading);
    const loaded$ = this.store.select(fromLocation.getLocationLoaded);
    const getLocationData$ = this.store.select(fromLocation.getLocations);
    const getError$ = this.store.select(fromLocation.getError);

    combineLatest([loaded$, loading$]).pipe(take(1)).subscribe((data) => {
      if ((!data[0] && !data[1]) || force) {
        this.store.dispatch(new LocationActions.LoadLocations());
        this.LocationService.getAllLocation().subscribe(res => {
          if(res.statusDescription.statusCode == 200){
            this.store.dispatch(new LocationActions.LoadLocationsSuccess({data : res.locations}));
          }else{
            this.store.dispatch(new LocationActions.LoadLocationsFailure({errorMessaage : res.statusDescription.statusMessage }));
          }
        }, error => {
          // console.log("my erroe"+error);
          this.store.dispatch(new LocationActions.LoadLocationsFailure({errorMessaage : "Somethings wents wrong "}));
        });
      }
    });
    return [getLocationData$, loading$ , loaded$ ,  getError$];
  }

  // getLocation(id: number, force = false): Observable<any>{

  //   const location$ = this.store.select(fromLocation.getLocation(id));
  //   const loading$ = this.store.select(fromLocation.getLocationLoading);
  //   const loaded$ = this.store.select(fromLocation.getLocationLoaded);

  //   // combineLatest([loaded$, loading$]).pipe(take(1)).subscribe((data) => {
  //   //   if ((!data[0] && !data[1]) || force) {
  //   //     this.store.dispatch(new LocationActions.LoadLocations());
  //   //     this.LocationService.getAllLocation().subscribe(res => {
  //   //       this.store.dispatch(new LocationActions.LoadLocationsSuccess({data : res.locations}));
  //   //     }, error => {
  //   //       this.store.dispatch(new LocationActions.LoadLocationsFailure({error}));
  //   //     });
  //   //   }
  //   // });
  //   location$.pipe(take(1)).subscribe(res => {
  //     if (force || !res) {
  //       this.store.dispatch(new LocationActions.LoadLocations());
  //       // this.LocationService.getlocation(id).subscribe(res => {
  //       // this.store.dispatch(new LocationAddAction({data : res.location}));
  //       // },error => {
  //       //   this.store.dispatch(new LocationActions.LoadLocationsFailure({error}));
  //       // });
  //       this.LocationService.getAllLocation().subscribe(res => {
  //         this.store.dispatch(new LocationActions.LoadLocationsSuccess({data : res.locations}));
  //       }, error => {
  //         this.store.dispatch(new LocationActions.LoadLocationsFailure({error}));
  //       });
  //     }
  //   });
  //   return location$;
  // }


}

