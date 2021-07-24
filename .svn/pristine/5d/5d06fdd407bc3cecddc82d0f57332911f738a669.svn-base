import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/store/services/auth.service';
import { environment } from 'src/environments/environment';
import { LoginComponent } from '../login/login.component';
import { LoginoptComponent } from '../loginopt/loginopt.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public modalRef:any;

  userfirstname : string | undefined;
  userlastname : string | undefined;
  usergmail : string | undefined ;
  userphoneno : string | undefined;
  transactionId : any | undefined;
  source : number = environment.source;

  constructor(private modalService: BsModalService, private authservice:AuthService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.source = environment.source;
  }

  firstname = new FormControl('', [Validators.required ]);
  getErrorMessagefirstname() {
    return 'You must enter your first name';
  }

  lastname = new FormControl('', [Validators.required ]);
  getErrorMessagelastname() {
    return 'You must enter your last name';
  }

  gmail = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessagegmail() {
    if (this.gmail.hasError('required')) {
      return 'You must enter a gmail';
    }
    return this.gmail.hasError('email') ? 'Not a valid email' : '';
  }
  
  phoneno = new FormControl('', [Validators.required , Validators.pattern(/^[6-9]\d{9}$/)]);
  getErrorMessagephoneno() {
    if (this.phoneno.hasError('required')) {
      return 'You must enter mobile no';
    }
    else{
      return 'You must enter valid mobile no.';
    }
  }

  signUp(){
    const obj = {
      emailId : this.usergmail,
      source : this.source,
      msisdn : '91'+this.userphoneno,
      firstName : this.userfirstname,
      lastName : this.userlastname
    }
    if (this.firstname.invalid) {
      this.toastr.error(this.getErrorMessagefirstname(), '', { timeOut: 3000,});
    }else if(this.lastname.invalid){
      this.toastr.error(this.getErrorMessagelastname(), '', { timeOut: 3000,});
    }else if(this.phoneno.invalid){
      this.toastr.error(this.getErrorMessagephoneno(), '', { timeOut: 3000,});
    }else if(this.gmail.invalid){
      this.toastr.error(this.getErrorMessagegmail(), '', { timeOut: 3000,});
    }else{
      this.authservice.signUp(obj).subscribe(
        res => {
          if(res.statusDescription?.statusCode == 200){
            this.transactionId = res.statusDescription?.transactionId; 
            this.toastr.error("Please verify opt send in your phone no.", '', { timeOut: 5000,});
            this.openOtpVerificationModel();
          }else{
           this.toastr.error(res.statusDescription?.statusMessage ? res.statusDescription?.statusMessage : "Somethings went wrong Please try again", '', { timeOut: 5000,});
          }
        },
        err => {
          console.log(err);
          this.toastr.error("Somethings went wrong Please try again", '', { timeOut: 5000,});
        }
      )
    }
  }

  openLoginModel(){
    this.modalRef.hide();
    this.modalRef = this.modalService.show(LoginComponent);
    this.modalRef.content.modalRef=  this.modalRef;
  }

  openOtpVerificationModel(){
    this.modalRef.hide();
    this.modalRef = this.modalService.show(LoginoptComponent);
    this.modalRef.content.modalRef=  this.modalRef;
    this.modalRef.content.msisdn =  this.userphoneno;
    this.modalRef.content.transactionId =  this.transactionId;
  }

}
