import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/store/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { sendOTP, verifyOTP } from 'src/app/store/models/auth';
import { EncryDecryUtility } from '../../../utils/encry&decry-utility';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-loginopt',
  templateUrl: './loginopt.component.html',
  styleUrls: ['./loginopt.component.css']
})
export class LoginoptComponent implements OnInit {

  public modalRef:any;
  public transactionId:any;
  public msisdn:any;
  isLoading:boolean = false;
  sendOTPRes:sendOTP | undefined;
  verifyOTPRes:verifyOTP | undefined;
  otp:any;
  display: any;
  resend:boolean=false;
  time:boolean=true;

  constructor(private AuthService: AuthService,private toastr: ToastrService) {
    this.timer(2);
   }

  ngOnInit(): void {
    // console.log(this.transactionId);
  
  }

  otpvalidation = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (!this.msisdn) {
      return 'You must enter Phone number';
    }else if(!this.msisdn.match('(0/91)?[6-9][0-9]{9}')){
      return 'You must enter valid mobile no.';
    }else{
      return false;
    }

  }

  verifyOTP(){
    if(this.otpvalidation.invalid){
      this.toastr.error('You must enter OTP', '', { timeOut: 5000,});
      return;
    }
    this.isLoading = true;
    this.AuthService.verifyOTP(this.msisdn,this.transactionId,this.otp).subscribe(
      data => {
        this.verifyOTPRes = data;
        if(this.verifyOTPRes?.statusDescription?.statusCode == 200){
          this.isLoading = false;
          this.verifyOTPRes = data;
          if(this.verifyOTPRes?.userDetails?.userTokenDetails?.jwtToken &&
            this.verifyOTPRes?.userDetails?.userTokenDetails?.jwtRefreshToken &&
            this.verifyOTPRes?.userDetails?.id){
              localStorage.setItem(EncryDecryUtility.set(environment.key,'jwtToken'), this.verifyOTPRes?.userDetails?.userTokenDetails?.jwtToken);
              localStorage.setItem(EncryDecryUtility.set(environment.key,'jwtRefreshToken'), this.verifyOTPRes?.userDetails?.userTokenDetails?.jwtRefreshToken);
              localStorage.setItem(EncryDecryUtility.set(environment.key,'userid'), EncryDecryUtility.set(environment.key,String(this.verifyOTPRes?.userDetails?.id)));
              localStorage.setItem(EncryDecryUtility.set(environment.key,'username'), EncryDecryUtility.set(environment.key,String(this.verifyOTPRes?.userDetails?.name)));
              //window.location.reload();
              if(this.verifyOTPRes?.userDetails?.name){
                this.AuthService.updateisuserlogin(this.verifyOTPRes?.userDetails?.name);
              }
              this.toastr.success("Login Sucessfully", '', { timeOut: 5000,});
          }else{
            this.toastr.success("Somethings wents wrong please Login again.", '', { timeOut: 5000,});
          }
          this.modalRef.hide();
        }else{
          this.isLoading = false;
          this.toastr.error(this.verifyOTPRes?.statusDescription?.statusMessage, '', { timeOut: 5000,});
        }
      },
      error => {
        this.isLoading = false;
        this.toastr.error("Somethings went wrong Please try again", '', { timeOut: 5000,});
        // console.log("Error:-"+error);
      }
    )

  }
// resendtimer(e:any){
//   let timeleft = 10;
// var downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//   }
//   e.value = 10 - timeleft;
//   timeleft -= 1;
// }, 1000);

  resendOTP(){
    // console.log("Resend called"+this.msisdn);
    this.time=true;
    this.timer(2);
    if(this.getErrorMessage()){
      this.toastr.error(String(this.getErrorMessage()), '', { timeOut: 5000,});
      return;
    }
    this.isLoading = true;
    this.AuthService.sendOTP(this.msisdn?this.msisdn:"").subscribe(
      data => {
        this.sendOTPRes = data;
        if(this.sendOTPRes.statusDescription?.statusCode == 200){
          this.isLoading = false;
          this.sendOTPRes = data;
          this.transactionId = this.sendOTPRes?.statusDescription?.transactionId;
          this.toastr.success("OTP send Sucessfully", '', { timeOut: 5000,});
        }else{
          this.isLoading = false;
          this.toastr.error(this.sendOTPRes.statusDescription?.statusMessage, '', { timeOut: 5000,});
        }
      },
      error => {
        this.isLoading = false;
        this.toastr.error("Somethings went wrong Please try again", '', { timeOut: 5000,});
        // console.log("Error:-"+error);
      }
    )
  }
  timer(minute: number) {
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log("finished");
        clearInterval(timer);
        this.time=false;
        this.resend=true;
      }
    }, 1000);
  }

}
