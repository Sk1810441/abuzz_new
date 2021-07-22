import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
}
