import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { guests } from 'src/app/store/models/bookingdetail';
import { AuthService } from 'src/app/store/services/auth.service';
import { BookingService } from 'src/app/store/services/booking.service';
import { DataService } from 'src/app/store/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cancelconfirmation',
  templateUrl: './cancelconfirmation.component.html',
  styleUrls: ['./cancelconfirmation.component.css']
})
export class CancelconfirmationComponent implements OnInit {
  public modalRef: any;
  jwtToken : string | undefined;
  source : number | undefined;
  userid : number | undefined;
  guest:any;
  constructor(private bookindService:BookingService,private authService : AuthService,private toastr: ToastrService,private dataService:DataService) { }

  ngOnInit(): void {
    this.jwtToken = String(this.authService.getjwtToken());
    this.source = Number(environment.source);
    this.userid = Number(this.authService.getuserid());
    this.dataService.shareguest.subscribe(res => {
    this.guest=res;
       });
      console.log(this.guest);
  }
  hide() {
    this.modalRef.hide();
  }
  cancelBooking(guest:guests){
    // console.log(guest);
    const obj = {
      "jwtToken":this.jwtToken,
      "masterBookingId":guest.masterBookingId,
      "cancelReason":"",
      "source":this.source,
      "guests":[{
        "bookingId":guest.bookingId
      }]
    }
    // console.log(obj);
    this.bookindService.cancelBooking(obj,Number(this.userid)).subscribe(
      data => {
        if(data.statusDescription.statusCode == 200){
          this.toastr.success("Booking Cancel Successful", '', { timeOut: 5000,});
          window.location.reload();
        }else{
          this.toastr.error(data.statusDescription.statusMessage, '', { timeOut: 5000,});
        }
        // console.log("data"+ JSON.stringify(data));
      },
      error => {
        this.toastr.error("Something wents wrong", '', { timeOut: 5000,});
        // console.log("error"+ JSON.stringify(error));
      })


  }
}
