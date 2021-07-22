import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { sendOTP } from 'src/app/store/models/auth';
import { AuthService } from 'src/app/store/services/auth.service';
import { LoginComponent } from '../login/login.component';
import { LoginoptComponent } from '../loginopt/loginopt.component';

@Component({
  selector: 'app-loginphoneno',
  templateUrl: './loginphoneno.component.html',
  styleUrls: ['./loginphoneno.component.css']
})
export class LoginphonenoComponent implements OnInit {

  public modalRef:any;
  msisdn: string | undefined;
  sendOTPRes:sendOTP | undefined;
  isLoading:boolean = false;
  constructor(private modalService: BsModalService , private AuthService: AuthService,private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  phoneno = new FormControl('', [Validators.required,Validators.pattern('(0/91)?[6-9][0-9]{9}')]);

  getErrorMessage() {
    if (this.phoneno.hasError('required')) {
      return 'You must enter mobile no';
    }
    else{
      return 'You must enter valid mobile no.';
    }
  }

  sendOTP(){
    if(this.phoneno.invalid){
      this.toastr.error(this.getErrorMessage(), '', { timeOut: 5000,});
      return;
    }
    this.isLoading = true;
    this.AuthService.sendOTP(this.msisdn?this.msisdn:"").subscribe(
      data => {
        this.sendOTPRes = data;
        if(this.sendOTPRes.statusDescription?.statusCode == 200){
          this.isLoading = false;
          this.sendOTPRes = data;
          this.modalRef.hide();
          this.modalRef = this.modalService.show(LoginoptComponent);
          this.modalRef.content.modalRef=  this.modalRef;
          console.log(this.sendOTPRes?.statusDescription?.transactionId);
          this.modalRef.content.transactionId =  this.sendOTPRes?.statusDescription?.transactionId;
          this.modalRef.content.msisdn =  this.msisdn;
        }else{
          this.isLoading = false;
          this.toastr.error(this.sendOTPRes.statusDescription?.statusMessage, '', { timeOut: 5000,});
        }
      },
      error => {
        this.isLoading = false;
        this.toastr.error("Somethings went wrong Please try again", '', { timeOut: 5000,});
        console.log("Error:-"+error);
      }
    )

  }

  openLoginModel(){
    this.modalRef.hide();
    this.modalRef = this.modalService.show(LoginComponent);
    this.modalRef.content.modalRef=  this.modalRef;
  }

}
