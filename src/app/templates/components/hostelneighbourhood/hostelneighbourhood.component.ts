import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { nearByList } from 'src/app/store/models/location';

@Component({
  selector: 'app-hostelneighbourhood',
  templateUrl: './hostelneighbourhood.component.html',
  styleUrls: ['./hostelneighbourhood.component.css']
})
export class HostelneighbourhoodComponent implements OnInit {

  @Input()  googleMapURL:string | undefined;
  @Input()  locationName:string | undefined;
  @Input()  nearByList:nearByList[] | undefined;
  
  constructor(public sanitizer: DomSanitizer) { }

  locationurl:SafeResourceUrl | undefined;

  ngOnInit(): void {
    this.locationurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.googleMapURL?this.googleMapURL:"");
  }

}
