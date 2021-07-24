import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/store/services/data.service';

@Component({
  selector: 'app-locationrouter',
  templateUrl: './locationrouter.component.html',
  styleUrls: ['./locationrouter.component.css']
})
export class LocationrouterComponent implements OnInit {

  filtercity:string[] = [];
  filterlocation:string[] = [];
  filtergender:string = "";

  constructor(private dataservice : DataService) { }

  ngOnInit(): void {
  }

  getfiltercity(city: string[]):void {
    this.filtercity=city;
    this.dataservice.updatecity(city);
  }

  getfilterlocation(location: string[]):void {
    this.filterlocation=location;
    this.dataservice.updatelocation(location);
  }

  getfiltergender(gender: string):void {
    this.filtergender=gender;
    this.dataservice.updategender(gender);
  }

}
