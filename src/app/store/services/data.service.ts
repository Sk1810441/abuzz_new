import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { guests } from '../models/bookingdetail';
import { profileDetails} from '../models/user-details';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor() { }

  private dataSource = new BehaviorSubject<profileDetails>(new profileDetails());
  data = this.dataSource.asObservable();

  updatedData(data: profileDetails){
    this.dataSource.next(data);
  }
  private contentguest = new BehaviorSubject<guests>(new guests());
  public shareguest = this.contentguest.asObservable();

  updateguest(guest:guests){
    this.contentguest.next(guest);
  }


  private contentlocation = new BehaviorSubject<string[]>([]);
  public sharelocation = this.contentlocation.asObservable();

  private contentcity = new BehaviorSubject<string[]>([]);
  public sharecity = this.contentcity.asObservable();

  private contentgender = new BehaviorSubject<string>("");
  public sharegender = this.contentgender.asObservable();
  

  updatelocation(location:string[]){
    this.contentlocation.next(location);
  }

  updatecity(city:string[]){
    this.contentcity.next(city);
  }

  updategender(gender:string){
    this.contentgender.next(gender);
  }

}
