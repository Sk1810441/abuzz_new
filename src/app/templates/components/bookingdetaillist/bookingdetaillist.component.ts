import { Component, Input, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { bookingDetails } from 'src/app/store/models/bookinghistory';
import { environment } from 'src/environments/environment';
import { EncryDecryUtility } from '../../../utils/encry&decry-utility';

@Component({
  selector: '[app-bookingdetaillist]',
  templateUrl: './bookingdetaillist.component.html',
  styleUrls: ['./bookingdetaillist.component.css']
})
export class BookingdetaillistComponent implements OnInit {

  @Input() bookingDetail : bookingDetails | undefined;
  
  constructor(private router:Router , private ActivatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
  }

  bookingdetail(masterBookingId:any){
    console.log("masterBookingId"+masterBookingId);
    //masterBookingId = EncryDecryUtility.set(environment.key,masterBookingId)
    const hexString = masterBookingId.toString(16);
    console.log("hexString"+hexString);
    const yourNumber = parseInt(hexString, 16);
    console.log("yourNumber"+yourNumber);
    this.router.navigate(['bookingdetail/'+masterBookingId], { relativeTo: this.ActivatedRoute });
  }

  cancelBooking(masterBookingId:any){
    console.log(masterBookingId);
  }
}
