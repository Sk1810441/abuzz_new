import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { take, takeWhile } from 'rxjs/operators';
import { Location } from 'src/app/store/models/location';
import * as fromLocation from '../../../store/selectors/location.selectors';
import { LocationRepository } from '../../../store/repositories/location.repository';

@Component({
  selector: 'app-locationfilter',
  templateUrl: './locationfilter.component.html',
  styleUrls: ['./locationfilter.component.css']
})

export class LocationfilterComponent implements OnInit ,OnDestroy {

  cities:string[]=[];
  citylocation:string[]=[];
  isAlive:boolean = false;
  loaded:boolean = false;
  
  @Output() getfiltercity  = new EventEmitter<string>();
  @Output() getfilterlocation  = new EventEmitter<string>();
  @Output() getfiltergender  = new EventEmitter<string>();

  constructor(private store: Store ,private LocationRepository: LocationRepository) { }

  ngOnInit(): void {

    this.isAlive = true;
    const loaded$ = this.store.select(fromLocation.getLocationLoaded);
    const cities$ = this.store.select(fromLocation.getCities);

    loaded$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.loaded = data;
      cities$.pipe(takeWhile(() => this.isAlive)).pipe(takeWhile(() => this.loaded)).pipe(takeWhile(() => !this.cities[0])).subscribe(data => {
        this.cities = data;
      });
    });

    if(!this.loaded){
      this.LocationRepository.getLocationsList(true);
    }

  }

  ngOnDestroy(): void{
    this.isAlive=false;
  }

  cityChange(city:string){

    this.citylocation = [];
    this.getfiltercity.emit(city);
    const loaded$ = this.store.select(fromLocation.getLocationLoaded);
    const location$ = this.store.select(fromLocation.getLocations);

    loaded$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.loaded = data;
      location$.pipe(takeWhile(() => this.isAlive)).pipe(takeWhile(() => this.loaded)).pipe(take(1)).subscribe(data => {
        const alllocation: Location[] = data;
        alllocation.forEach(element => {
          if(!(element.city?.localeCompare(city))){
            if(element.locationName){
              this.citylocation.push(element.locationName?element.locationName:"");
            }
          }
        });
      });
    });

  }

  locationChange(location:string){
    this.getfilterlocation.emit(location);
  }

  genderChange(gender:string){
    this.getfiltergender.emit(gender);
  }


}
