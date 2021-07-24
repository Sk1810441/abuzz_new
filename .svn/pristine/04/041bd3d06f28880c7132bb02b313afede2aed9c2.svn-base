import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-abouthostel',
  templateUrl: './abouthostel.component.html',
  styleUrls: ['./abouthostel.component.css']
})
export class AbouthostelComponent implements OnInit {

  @Input() address: string | undefined;

  @Input() googleMapURL: string | undefined;
  @Input() genderlist:string[] | undefined;
  @Input() locationName: string | undefined;
  @Input() aboutUs: string | undefined;


  constructor(public sanitizer: DomSanitizer) { }
  locationurl: SafeResourceUrl | undefined;

  ngOnInit(): void {
    this.locationurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.googleMapURL ? this.googleMapURL : "");
   console.log(this.locationurl)
  }

}
