import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Location } from 'src/app/store/models/location';
//import { JpPreloadService } from '@jaspero/ng-image-preload';

@Component({
  selector: 'app-hostellist',
  templateUrl: './hostellist.component.html',
  styleUrls: ['./hostellist.component.css']
})
export class hostellistComponent implements OnInit,OnChanges {

  @Input() filtercity:string[] = [];
  @Input() filterlocation:string[] = [];
  @Input() filtergender:string = "";
  @Input() locations:Location[]=[];
  @Input() loaded:boolean | undefined;
  
  isfound:boolean = true;
  filterlocationslist:Location[]=[];
  constructor( ) { }

  ngOnInit(): void {
    this.filter();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.filtercity){
      this.filterlocation = [];
    }
    this.filter();
  }

  filter(){
    this.filterlocationslist = [];
    this.isfound = false;
    for(let element of this.locations){
      //// console.log(this.filterlocation)
      // // console.log(element.city);
      // // console.log(this.filtercity+" city same "+element.city);
      // // console.log(this.filterlocation+" location same "+element.locationName);
      // // console.log(this.filtergender+" gender same "+element.gendersAvailable?.find(x => x == this.filtergender));
      if(((this.filtercity.length==0 || this.filtercity.indexOf(element.city?element.city:"")>-1) && 
          (this.filterlocation.length==0  || this.filterlocation.indexOf(element.locationName?element.locationName:"")>-1 ) &&
          (this.filtergender == ""  || element.gendersAvailable?.find(x => x == this.filtergender)  !== undefined ) ) ){
          this.isfound = true;
          this.filterlocationslist.push(element);
          //return;
      }
      
    }
  }

  // gotolocationcard(element:any){
  //   if(((this.filtercity.length==0 || this.filtercity.indexOf(element.city?element.city:"")>-1) && 
  //   (this.filterlocation.length==0  || this.filterlocation.indexOf(element.locationName?element.locationName:"")>-1 ) &&
  //   (this.filtergender == ""  || element.gendersAvailable?.find((x:string) => x == this.filtergender)  !== undefined ) ) ){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }


}
