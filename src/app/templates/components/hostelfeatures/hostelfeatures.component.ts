import { Component, Input, OnInit } from '@angular/core';
import { addonAmenitiesMetadatas } from 'src/app/store/models/location';

@Component({
  selector: 'app-hostelfeatures',
  templateUrl: './hostelfeatures.component.html',
  styleUrls: ['./hostelfeatures.component.css']
})
export class HostelfeaturesComponent implements OnInit {

  @Input()  addonAmenitiesMetadatas:addonAmenitiesMetadatas[] | undefined;
  constructor() { }

  ngOnInit(): void {}

}
