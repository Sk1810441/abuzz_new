import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/store/services/auth.service';
import { BookingService } from 'src/app/store/services/booking.service';
import { EncryDecryUtility } from 'src/app/utils/encry&decry-utility';
import { environment } from 'src/environments/environment';
import { bookingsInfo, guests } from './../../../store/models/bookingdetail';

@Component({
  selector: 'app-bookingdetail',
  templateUrl: './bookingdetail.component.html',
  styleUrls: ['./bookingdetail.component.css']
})
export class BookingdetailComponent implements OnInit {

  masterBookingId:string | undefined;
  userid : number | undefined;
  jwtToken : string | undefined;
  source : number | undefined;
  bookingsInfo : bookingsInfo | undefined;
  bookingstatus : any;
  paymentdetails : any;
  guests : guests[] =[];
 

  constructor(private toastr: ToastrService,private activatedRoute:ActivatedRoute,private bookingService:BookingService,private authService:AuthService) { }

  ngOnInit(): void {
    this.masterBookingId =  String(this.activatedRoute.snapshot.paramMap.get('masterBookingId'));
   // this.masterBookingId = EncryDecryUtility.get(environment.key,masterid);
    this.userid = Number(this.authService.getuserid());
    this.jwtToken = String(this.authService.getjwtToken());
    this.source = environment.source;
    console.log("masterBookingId"+this.masterBookingId);
    this.getBookingDetail();
   
  }

  getBookingDetail(){
    const obj = {
      "jwtToken":this.jwtToken,
      "source":this.source,
      "masterBookingId":this.masterBookingId
    }
    this.bookingService.getBookingDetail(obj,Number(this.userid)).subscribe(
      bookingdetail => {
        if(bookingdetail.statusDescription.statusCode == 200){
          this.bookingsInfo = bookingdetail.bookingsInfo[0];
          console.log("funcrtion"+ JSON.stringify(bookingdetail.bookingsInfo[0]));
          if(this.bookingsInfo?.bookingDetails?.guests){
            this.guests = this.bookingsInfo?.bookingDetails?.guests;
          }
          console.log("this.bookingsInfo"+ JSON.stringify(this.bookingsInfo?.bookingDetails?.guests));
          this.bookingstatus={
            "location":this.bookingsInfo?.bookingDetails?.locationName,
            "BookingID":this.bookingsInfo?.bookingDetails?.masterBookingId,
            "BookedOn":this.bookingsInfo?.bookingDetails?.requestDate,
            "Status":this.bookingsInfo?.bookingDetails?.bookingStatus,
            "Checkin":this.bookingsInfo?.bookingDetails?.checkinDate,
            "Checkout":this.bookingsInfo?.bookingDetails?.checkoutDate,
            "QRImage":this.bookingsInfo?.bookingDetails?.qrCodeImage
          }
          this.paymentdetails={
            "Checkin":this.bookingsInfo?.bookingDetails?.checkinDate,
            "Checkout":this.bookingsInfo?.bookingDetails?.checkoutDate,
            "totalnights":this.bookingsInfo?.bookingDetails?.stayPeriod,
            "bookingAmount":this.bookingsInfo?.bookingDetails?.bookingAmount,
            "securityAmount":this.bookingsInfo?.bookingDetails?.securityAmount,
            "totalAmount":this.bookingsInfo?.bookingDetails?.totalAmount,
          }
          this.canaddguest();
        }else{
          this.toastr.error(bookingdetail.statusDescription.statusMessage, '', { timeOut: 5000,});
        }
      },
      error => {
        this.toastr.error("Somethings wents wrong", '', { timeOut: 5000,});
        console.log("error"+JSON.stringify(error));
      }
    )
  }

  canaddguest(){
    if(this.bookingsInfo?.bookingDetails?.bookingStatus == "0" || this.bookingsInfo?.bookingDetails?.bookingStatus == "7" ){
      return true;
    }else{
      return false;
    }
  }
}
