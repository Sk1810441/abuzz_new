import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { take, takeWhile } from 'rxjs/operators';
import { Location } from 'src/app/store/models/location';
import * as fromLocation from '../../../store/selectors/location.selectors';
import { LocationRepository } from '../../../store/repositories/location.repository';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-locationfilter',
  templateUrl: './locationfilter.component.html',
  styleUrls: ['./locationfilter.component.css']
})

export class LocationfilterComponent implements OnInit ,OnDestroy {
  dropdownSettings:IDropdownSettings = {};
  dropdownSettings2:IDropdownSettings = {};
  dropdownSettings3:IDropdownSettings = {};
  disabled = false;
  ShowFilter = true;
  limitSelection = false;
  cities:any[]=[];
  citylocation:any[]=[];
  isAlive:boolean = false;
  loaded:boolean = false;
  selectedcities:any[]=[];
  selectedlocations:any[]=[];
  selectedGender:string="";
  genders:string[]=["Male", "Female"];

  @Output() getfiltercity  = new EventEmitter<string[]>();
  @Output() getfilterlocation  = new EventEmitter<string[]>();
  @Output() getfiltergender  = new EventEmitter<string>();

  constructor(private store: Store ,private LocationRepository: LocationRepository) { }

  ngOnInit(): void {
    
    this.isAlive = true;
    const loaded$ = this.store.select(fromLocation.getLocationLoaded);
    const cities$ = this.store.select(fromLocation.getCities);

    loaded$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.loaded = data;
      cities$.pipe(takeWhile(() => this.isAlive)).pipe(takeWhile(() => this.loaded)).pipe(takeWhile(() => !this.cities[0])).subscribe(data => {
        this.cities=[];
        let i=1;
        for(let a in data){
          let d={
            "id":i,
            "data":data[i-1]
          }
          this.cities.push(d);
          i=i+1;
        }
      });
    });

    const loaded1$ = this.store.select(fromLocation.getLocationLoaded);
    const location$ = this.store.select(fromLocation.getLocations);
    this.citylocation = [];
    loaded1$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.loaded = data;
      location$.pipe(takeWhile(() => this.isAlive)).pipe(takeWhile(() => this.loaded)).pipe(take(1)).subscribe(data => {
        const alllocation: Location[] = data;
        let i=1;
        alllocation.forEach(element => {
          if(element.locationName){
            let d={
              "id":i,
              "data":element.locationName?element.locationName:""
            }
            this.citylocation.push(d);
            i=i+1;
          }
        });
      });
    });

    if(!this.loaded){
      this.LocationRepository.getLocationsList(true);
    }

    this.dropdownSettings  = {
      singleSelection: false,
      enableCheckAll: false,
      idField: 'id',
      textField: 'data',
      itemsShowLimit: 1,
      allowSearchFilter: this.ShowFilter,
    };

    this.dropdownSettings2  = {
      singleSelection: true,
      enableCheckAll: false,
      itemsShowLimit: 1,
      allowSearchFilter: false,
      closeDropDownOnSelection:true
    };

    this.dropdownSettings3  = {
      singleSelection: false,
      enableCheckAll: false,
      idField: 'id',
      textField: 'data',
      itemsShowLimit: 2,
      allowSearchFilter: this.ShowFilter,
    };

  }
  

  ngOnDestroy(): void{
    this.isAlive=false;
  }

  // cityChange(city:string){

  //   this.citylocation = [];
  //   this.getfiltercity.emit(city);
  //   const loaded$ = this.store.select(fromLocation.getLocationLoaded);
  //   const location$ = this.store.select(fromLocation.getLocations);

  //   loaded$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
  //     this.loaded = data;
  //     location$.pipe(takeWhile(() => this.isAlive)).pipe(takeWhile(() => this.loaded)).pipe(take(1)).subscribe(data => {
  //       const alllocation: Location[] = data;
  //       alllocation.forEach(element => {
  //         this.selectedcities.forEach(element1 => {
  //           if(!(element.city?.localeCompare(element1))){
  //             if(element.locationName){
  //               this.citylocation.push(element.locationName?element.locationName:"");
  //             }
  //           }
  //         });
  //         if(this.selectedcities.length==0){
  //           if(element.locationName){
  //             this.citylocation.push(element.locationName?element.locationName:"");
  //           }
  //         }
  //       });
  //     });
  //   });

  // }

  // locationChange(location:string){
  //   this.selectedlocations=[];
  //   this.selectedlocations.push(location);
  //   this.getfilterlocation.emit(this.selectedlocations);
  // }

  onItemSelectGender(gender:any){
    let g:string=gender;
    if(g=="Male"){
    this.getfiltergender.emit("M");
    if(this.genders.indexOf("Clear")<0)
    this.genders = this.genders.concat("Clear")
    }
    else if (g=="Female"){
    this.getfiltergender.emit("F");
    if(this.genders.indexOf("Clear")<0)
    this.genders = this.genders.concat("Clear")
    }
    else if(g=="Clear"){
      this.getfiltergender.emit("");
      this.genders=["Male", "Female"];
      this.selectedGender="";
    }
    
  }
  onItemDeSelectGender(gender:any){
    this.getfiltergender.emit("");
    this.genders=["Male", "Female"];
  }

  onItemSelect(item: any) {
    this.citylocation = [];
    //// console.log(this.selectedcities);
    let arr:string[]=[];
    this.selectedcities.forEach(element1 => {
        arr.push(element1.data);
    });
    this.getfiltercity.emit(arr);
    const loaded$ = this.store.select(fromLocation.getLocationLoaded);
    const location$ = this.store.select(fromLocation.getLocations);

    loaded$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.loaded = data;
      location$.pipe(takeWhile(() => this.isAlive)).pipe(takeWhile(() => this.loaded)).pipe(take(1)).subscribe(data => {
        const alllocation: Location[] = data;
        let i=1;
        alllocation.forEach(element => {
          
          this.selectedcities.forEach(element1 => {
            if(!(element.city?.localeCompare(element1.data))){
              if(element.locationName){
                let d={
                  "id":i,
                  "data":element.locationName?element.locationName:""
                }
    
                this.citylocation.push(d);
                i=i+1;
              }
            }
          });
          if(this.selectedcities.length==0){
            if(element.locationName){
              let d={
                "id":i,
                "data":element.locationName?element.locationName:""
              }
  
              this.citylocation.push(d);
              i=i+1;
            }
          }
        });
      });
    });
  }

  onItemDeSelect(item: any) {
    for(let l in this.selectedlocations){
      this.onItemDeSelectLocation(l);
    }
    this.selectedlocations=[];
    this.citylocation = [];
    let arr:string[]=[];
    this.selectedcities.forEach(element1 => {
        arr.push(element1.data);
    });
    this.getfiltercity.emit(arr);
    const loaded$ = this.store.select(fromLocation.getLocationLoaded);
    const location$ = this.store.select(fromLocation.getLocations);

    loaded$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.loaded = data;
      location$.pipe(takeWhile(() => this.isAlive)).pipe(takeWhile(() => this.loaded)).pipe(take(1)).subscribe(data => {
        const alllocation: Location[] = data;
        let i=1;
        alllocation.forEach(element => {
         
          this.selectedcities.forEach(element1 => {
            if(!(element.city?.localeCompare(element1.data))){
              if(element.locationName){
                let d={
                  "id":i,
                  "data":element.locationName?element.locationName:""
                }
    
                this.citylocation.push(d);
                i=i+1;
              }
            }
          });
          if(this.selectedcities.length==0){
            if(element.locationName){
              let d={
                "id":i,
                "data":element.locationName?element.locationName:""
              }
  
              this.citylocation.push(d);
              i=i+1;
            }
          }
        });
      });
    });
    
  }

  onItemSelectLocation(item: any) {
    //// console.log(this.selectedlocations);
    let arr:string[]=[];
    this.selectedlocations.forEach(element1 => {
        arr.push(element1.data);
    });
    this.getfilterlocation.emit(arr);
  }

  onItemDeSelectLocation(item: any) {
    let arr:string[]=[];
    this.selectedlocations.forEach(element1 => {
        arr.push(element1.data);
    });
    this.getfilterlocation.emit(arr);
  }

}
