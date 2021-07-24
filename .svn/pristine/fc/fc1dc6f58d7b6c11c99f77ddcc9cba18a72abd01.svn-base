import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginComponent } from '../../components/login/login.component';
import { billingsummary } from 'src/app/store/models/billing';
import { AuthService } from 'src/app/store/services/auth.service';
import { EncryDecryUtility } from '../../../utils/encry&decry-utility';
import { environment } from '../../../../environments/environment';
import { BillingService } from 'src/app/store/services/billing.service';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/store/models/payment';

@Component({
  selector: 'app-bookingsummary',
  templateUrl: './bookingsummary.component.html',
  styleUrls: ['./bookingsummary.component.css']
})
export class BookingsummaryComponent implements OnInit,OnChanges {

  @Input() billingsummary:billingsummary | undefined;
  @ViewChild('paymentform') paymentform: any;

  modalRef: BsModalRef | undefined;
  payment:Payment | undefined;
  isLoading:boolean = false;
  userid : number | undefined;
  jwtToken : string | undefined;
  source:number = environment.source;
  constructor(private modalService: BsModalService,private toastr: ToastrService ,private AuthService: AuthService, private BillingService:BillingService) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("summay:- "+ JSON.stringify(this.billingsummary));
  }

  paid(){
    console.log(this.AuthService.getuserid());
    if(!this.billingsummary?.TotalNights){
      this.toastr.error("Please select checkin & checkout data", '', { timeOut: 3000,});
    }
    else if (this.billingsummary?.TotalNights == "0"){
      this.toastr.error("No. of night can't be 0", '', { timeOut: 3000,});
    }
    else if(typeof this.billingsummary?.usersBookingMeta == "undefined" || this.billingsummary?.usersBookingMeta == null || this.billingsummary?.usersBookingMeta.length == null || this.billingsummary?.usersBookingMeta.length == 0){
      this.toastr.error("Please select no. guest", '', { timeOut: 3000,});
    }
    else if(this.AuthService.isLogin()){
      this.isLoading = true;
      const randomNumber = Math.floor(1000000000000 + Math.random() * 9000000000000);
      const userid = Number(this.AuthService.getuserid());
      const locationid = this.billingsummary?.locationid?this.billingsummary?.locationid:0;
      const value = userid+"|"+locationid+"|"+environment.source+"|"+randomNumber+"|"+environment.salt;
      const hashToken = EncryDecryUtility.SHA512hashing(value);
      this.userid = userid;
      this.jwtToken = String(this.AuthService.getjwtToken());
      const requestobject= {
        "jwtToken":this.AuthService.getjwtToken(), 
        "strCheckinDate":this.billingsummary?.CheckIn?.slice(4)+" 12:00:00",
        "strCheckOutDate":this.billingsummary?.Checkout?.slice(4)+" 12:00:00",
        "source":environment.source,
        "requestId":randomNumber,
        "paymentType":"full",
        "hashToken":hashToken,
        "usersBookingMeta":this.billingsummary?.usersBookingMeta,
      }

      this.BillingService.payment(requestobject,locationid,userid).subscribe(
        data => {
          this.payment = data;
          if(this.payment?.statusDescription?.statusCode == 200){
            setTimeout(() =>{
              this.paymentform.nativeElement.submit();
            }, 2000); 
          }else{
            this.toastr.error(this.payment?.statusDescription?.statusMessage, '', { timeOut: 3000,});
          }
          setTimeout(() =>{
            this.isLoading = false;
          }, 2500); 
        },
        error => {
          this.toastr.error("Somethings wents wrong please try again!", '', { timeOut: 3000,});
          console.log(error);
          this.isLoading = false;
        }
      )
    }else{
      this.modalRef = this.modalService.show(LoginComponent);
      this.modalRef.content.modalRef=  this.modalRef;
    }
  }

}
