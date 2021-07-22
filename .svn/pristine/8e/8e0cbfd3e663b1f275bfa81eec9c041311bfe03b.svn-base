import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';
import * as fromLocation from './../../../store/selectors/location.selectors';
import { LocationRepository } from '../../../store/repositories/location.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from 'src/app/store/models/location';
import { LoadCurrentLocation } from 'src/app/store/actions/location.actions';
// import { EncryDecryUtility } from '../../../utils/encry&decry-utility';
// import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-hostel',
  templateUrl: './hostel.component.html',
  styleUrls: ['./hostel.component.css']
})
export class hostelComponent implements OnInit,OnDestroy,DoCheck {

  constructor(private router: Router,private activatedRoute: ActivatedRoute,private store: Store , private LocationRepository: LocationRepository) { }

  loading:boolean=false;
  loaded:boolean=false;
  error:boolean=false;
  isAlive:boolean=false;
  loaderTitle:string = "Fetching data Please wait....";
  locationid:number | undefined;
  location:Location | undefined ;
  imagesList:string[] | undefined;
  datafound:boolean = false; 


  ngOnInit(): void {
    window.scroll(0,0);
    this.isAlive=true;
    // this.locationid = Number(EncryDecryUtility.get(String(environment.key),String(this.activatedRoute.snapshot.paramMap.get('locationid'))));
    // this.gender = String(EncryDecryUtility.get(String(environment.key),String(this.activatedRoute.snapshot.paramMap.get('gender'))));
    this.locationid = Number(this.activatedRoute.snapshot.paramMap.get('locationid'));
    this.getLocation(this.locationid);
    localStorage.setItem("bookingDetailId","01");
  }

  ngDoCheck(){
    if(this.location){
      this.datafound = true;
    }
    this.imagesList = this.location?.imagesMList;
  }

  ngOnDestroy(): void{
    this.isAlive=false;
  }
  
  tryAgain() {
    this.LocationRepository.getLocationsList(true);
  }

  gohostelbooking(){
    /// this.router.navigate(['/hostel']);
     this.router.navigate(['booking/'+this.locationid] ,{ relativeTo: this.activatedRoute });
     this.store.dispatch(new LoadCurrentLocation({currentdata:this.location?this.location:new Location()}));
   }

  getLocation(id:number) {

    const location$ = this.store.select(fromLocation.getLocation(id));
    //const location$ = this.store.select(fromLocation.getCurrentLocation);
    const loading$ = this.store.select(fromLocation.getLocationLoading);
    const loaded$ = this.store.select(fromLocation.getLocationLoaded);
    const error$ = this.store.select(fromLocation.getError);
    
    location$.pipe(takeWhile(() => this.isAlive)).subscribe(location => {
      this.location = location;
    });

    loading$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.loading = data;
    });
    loaded$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.loaded = data;
    });
    error$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.error = data;
    });

    if(!this.loading && !this.loaded){
      this.tryAgain();
    }

  }

}
