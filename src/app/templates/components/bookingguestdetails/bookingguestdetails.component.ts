import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { guests, Payments, userContacts } from '../../../store/models/bookingdetail';
import { AuthService } from '../../../store/services/auth.service';
import { BookingService } from '../../../store/services/booking.service';
import { environment } from '../../../../environments/environment';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CancelconfirmationComponent } from '../../popup/cancelconfirmation/cancelconfirmation.component';
import { DataService } from 'src/app/store/services/data.service';
import { AddguestComponent } from '../addguest/addguest.component';

@Component({
  selector: 'app-bookingguestdetails',
  templateUrl: './bookingguestdetails.component.html',
  styleUrls: ['./bookingguestdetails.component.css']
})
export class BookingguestdetailsComponent implements OnInit {

  @Input() guests : guests[] = [];
  @Input() canaddguest : boolean = true;
  @Input() bedCount : number | undefined ;
  @Input() payments : Payments[] | undefined;

  userContacts : userContacts[] | undefined;
  jwtToken : string | undefined;
  source : number | undefined;
  userid : number | undefined;
  modalRef: any;
  disable:boolean = false;
  selectedGuestId:Number=0;
  //cancelBookingSelectedGuest:guests | undefined;

  constructor(private bookindService:BookingService, private authService : AuthService,private toastr: ToastrService,private modalService: BsModalService,private dataservice:DataService) { }

  ngOnInit(): void {
    this.jwtToken = String(this.authService.getjwtToken());
    this.source = Number(environment.source);
    this.userid = Number(this.authService.getuserid());
    this.getGuestList();
  }

  counter(i: any) {
    return new Array(i);
  }

  getGuestList(){
    const obj = {
      "jwtToken":this.jwtToken,
      "source":this.source
    }
    this.bookindService.getguestlist(obj,Number(this.userid)).subscribe(
      data => {
        if(data.statusDescription.statusCode == 200){
          this.userContacts = data.userContacts;
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

  onOptionsSelected(value:String){
    // console.log(value);
    this.selectedGuestId=Number(value);
    // console.log(this.selectedGuestId);
  }

  attachtobooking(guest:guests){

    const obj = {
      "jwtToken":this.jwtToken,
      "source":this.source,
      "masterBookingId":guest.masterBookingId,
      "guest":{
        "bookingId":guest.bookingId,
        "contactId":this.selectedGuestId
      }
    }

    this.bookindService.attachtobooking(obj,Number(this.userid)).subscribe(
      data => {
        if(data.statusDescription.statusCode == 200){
          this.toastr.success("Attached sucessfully", '', { timeOut: 5000,});
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

  cancelBooking(guest:guests){
    this.dataservice.updateguest(guest);
  }
popup(){
  this.modalRef = this.modalService.show(CancelconfirmationComponent);
  this.modalRef.content.modalRef = this.modalRef;
}

  goToLink(payment: Payments){
    window.open(payment.receiptLink);
  }
  show(){
    this.modalRef = this.modalService.show(AddguestComponent);
    this.modalRef.content.modalRef = this.modalRef;
  }
  
}



