import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Location } from 'src/app/store/models/location';
//import { JpPreloadService } from '@jaspero/ng-image-preload';

@Component({
  selector: 'app-hostellist',
  templateUrl: './hostellist.component.html',
  styleUrls: ['./hostellist.component.css']
})
export class hostellistComponent implements OnInit,OnChanges {

  @Input() filtercity:string = "";
  @Input() filterlocation:string = "";
  @Input() filtergender:string = "";
  @Input()locations:Location[]=[];

  isfound:boolean = true;

  constructor( ) { }

  ngOnInit(): void {}
  
  ngOnChanges(changes: SimpleChanges) {
    if(changes.filtercity){
      this.filterlocation = "";
    }
    this.filter();
  }

  filter(){
    for(let element of this.locations){
      this.isfound = false;
      console.log(this.filtergender+"Amit kumar"+element.gendersAvailable?.find(x => x == this.filtergender));
      if(((this.filtercity == "" || element.city == this.filtercity) && 
          (this.filterlocation == ""  || element.locationName == this.filterlocation) &&
          (this.filtergender == ""  || element.gendersAvailable?.find(x => x == this.filtergender)  !== undefined ) ) ){
          this.isfound = true;
          return;
      }
      
    }
  }

  gotolocationcard(location:any){
    if((!this.filtercity || location.city == this.filtercity) && 
       (!this.filterlocation || location.locationName == this.filterlocation) &&
       (!this.filtergender  || location.gendersAvailable?.find((x: string) => x == this.filtergender)  !== undefined) 
      ){
      return true;
    }else{
      return false;
    }
  }


}
