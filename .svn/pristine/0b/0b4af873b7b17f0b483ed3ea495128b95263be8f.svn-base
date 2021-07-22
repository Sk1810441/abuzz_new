import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { JpPreloadService } from '@jaspero/ng-image-preload';

@Component({
  selector: 'app-bookingstatus',
  templateUrl: './bookingstatus.component.html',
  styleUrls: ['./bookingstatus.component.css']
})
export class BookingstatusComponent implements OnInit {

  @Input() bookingstatus : any | undefined;
  constructor(private preload: JpPreloadService) { }

  ngOnInit(): void {
    this.preload.initialize();
  }

}
