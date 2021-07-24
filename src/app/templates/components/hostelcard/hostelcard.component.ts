import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Location } from 'src/app/store/models/location';
import { LoadCurrentLocation } from '../../../store/actions/location.actions';
// import { EncryDecryUtility } from '../../../utils/encry&decry-utility';
// import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-hostelcard',
  templateUrl: './hostelcard.component.html',
  styleUrls: ['./hostelcard.component.css']
})
export class hostelcardComponent implements OnInit {

  @Input()  location:Location | undefined;

  imagesList:string[] | undefined;
  lowestRate:number = 999;
  
  constructor(private router: Router,private store: Store<any> , private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.imagesList =this.location?.imagesMList;
    if(this.location && this.location.tariffList){
      this.location.tariffList.forEach(element => {
          if(element.effRate){
            const rate = parseInt(element.effRate);
            if(this.lowestRate > rate){
                this.lowestRate = rate;
            }
          }
      })
    }

  }

  gohostel(){
    this.router.navigate(['hostel/'+this.location?.id], { relativeTo: this.ActivatedRoute });
    if(this.location){
      this.store.dispatch(new LoadCurrentLocation({currentdata:this.location}));
    }
  }

  gohostelbooking(){
    this.router.navigate(['booking/'+this.location?.id], { relativeTo: this.ActivatedRoute });
    if(this.location){
      this.store.dispatch(new LoadCurrentLocation({currentdata:this.location}));
    }
  }
  
}
