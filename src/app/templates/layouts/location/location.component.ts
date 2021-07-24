import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { Location } from 'src/app/store/models/location';
import { DataService } from 'src/app/store/services/data.service';
import { LocationRepository } from '../../../store/repositories/location.repository';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit , OnDestroy {
  
  filtercity:string[] = [];
  filterlocation:string[] = [];
  filtergender:string = "";

  loading:boolean=false;
  loaded:boolean=false;
  error:boolean=false;
  isAlive:boolean=false;
  locations:Location[] = [];
  loaderTitle:string = "Fetching data Please wait....";

  constructor(private LocationRepository: LocationRepository , private dataservice : DataService ) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.isAlive=true;
    this.getLocationList();
    this.getfilter();
  }

  ngOnDestroy(): void{
    this.isAlive=false;
  }

  getLocationList() {

    const observer$ = this.LocationRepository.getLocationsList();
    const locationData$ = observer$[0];
    const loading$ = observer$[1];
    const loaded$ = observer$[2];
    const error$ = observer$[3];

    locationData$.pipe(takeWhile(() => this.isAlive)).subscribe(locations => {
      this.locations = locations;
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

  }

  tryAgain() {
    this.LocationRepository.getLocationsList(true);
  }

  getfilter(){
    this.dataservice.sharecity.subscribe(
      city => {
        this.filtercity=city;
      }
    );

    this.dataservice.sharelocation.subscribe(
      location => {
        this.filterlocation=location;
      }
    );

    this.dataservice.sharegender.subscribe(
      gender => {
        this.filtergender=gender;
      }
    );
  }

  // getfiltercity(city: string[]):void {
  //   this.filtercity=city;
  // }

  // getfilterlocation(location: string[]):void {
  //   this.filterlocation=location;
  // }

  // getfiltergender(gender: string):void {
  //   this.filtergender=gender;
  // }


}
