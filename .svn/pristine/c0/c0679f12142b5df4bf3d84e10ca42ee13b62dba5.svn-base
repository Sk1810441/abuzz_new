import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';
import * as fromLocation from './../../../store/selectors/location.selectors';
import { LocationRepository } from '../../../store/repositories/location.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from 'src/app/store/models/location';
import { billingsummary } from 'src/app/store/models/billing';
import { LoadCurrentLocation } from 'src/app/store/actions/location.actions';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit, OnDestroy, DoCheck {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private store: Store, private LocationRepository: LocationRepository) { }

  loading: boolean = false;
  loaded: boolean = false;
  error: boolean = false;
  isAlive: boolean = false;
  loaderTitle: string = "Fetching data Please wait....";
  locationid: number | undefined;
  gender: string | undefined;
  location: Location | undefined;
  imagesList: string[] | undefined;
  datafound: boolean = false;
  BookingDetailId: any;
  // billingsummary:billingsummary = {
  //   CheckIn:"--- , --/--/----",
  //   Checkout:"--- , --/--/----",
  //   TotalNights:"---",
  //   TotalBeds: 0,
  //   BedAmount:"-----",
  //   ServiceTaxAmount:"-----",
  //   TotalFareAmount:"------",
  //   usersBookingMeta:undefined,
  //   locationid:undefined,
  //   securityDepositeAmount:"-------",
  //   bookingAmountTotal:"---------",
  //   rentAmountTotal:"-----------",

  // };

  billingsummary: billingsummary = {
    CheckIn: undefined,
    Checkout: undefined,
    TotalNights: undefined,
    TotalBeds: undefined,
    BedAmount: undefined,
    ServiceTaxAmount: undefined,
    TotalFareAmount: undefined,
    usersBookingMeta: undefined,
    locationid: undefined,
    securityDepositeAmount: undefined,
    bookingAmountTotal: undefined,
    rentAmountTotal: undefined,

  };

  ngOnInit(): void {
    window.scroll(0, 0);
    this.isAlive = true;
    this.locationid = Number(this.activatedRoute.snapshot.paramMap.get('locationid'));
    this.gender = String(this.activatedRoute.snapshot.paramMap.get('gender'));
    this.getLocation(this.locationid);

    this.BookingDetailId = localStorage.getItem("bookingDetailId");
    localStorage.removeItem("bookingDetailId");

  }

  ngDoCheck() {
    this.imagesList = this.location?.imagesMList;
    //this.gender = this.location?.currentgender;
    if (this.location) {
      this.datafound = true;
    }
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  tryAgain() {
    this.LocationRepository.getLocationsList(true);
  }

  getLocation(id: number) {

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

    if (!this.loading && !this.loaded) {
      this.tryAgain();
    }

  }

  getbilldetails(billingsummary: billingsummary) {
    this.billingsummary = billingsummary;
  }
  gohostel(){
    this.router.navigate(['/hostel/'+this.location?.id]);
    if(this.location){
      this.store.dispatch(new LoadCurrentLocation({currentdata:this.location}));
    }
  }

}
