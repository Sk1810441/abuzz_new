import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadCurrentLocation } from 'src/app/store/actions/location.actions';
import { bedTypesList, tariffList } from 'src/app/store/models/location';

@Component({
  selector: 'app-hostelrooms',
  templateUrl: './hostelrooms.component.html',
  styleUrls: ['./hostelrooms.component.css']
})
export class HostelroomsComponent implements OnInit {

  @Input() bedTypesList: bedTypesList[] | undefined;
  @Input() imagesList: string[] | undefined;
  @Input() tariffList: tariffList[] | undefined;
  @Input() genderlist: string[] | undefined;

  locationid: number | undefined;
  today: Date | undefined;
  tomorrow: Date | undefined;

  constructor(private router: Router,private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.locationid = Number(this.activatedRoute.snapshot.paramMap.get('locationid'));
    this.today = new Date();
    this.tomorrow = new Date(this.today);
    this.tomorrow.setDate(this.today.getDate() + 5);
  }
  gobookingpage() {
    this.router.navigate(['booking/'+this.locationid], { relativeTo: this.activatedRoute });
  }

}
