import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { verifyOTP } from 'src/app/store/models/auth';
import { AuthService } from '../../../store/services/auth.service';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { LoginphonenoComponent } from '../loginphoneno/loginphoneno.component';
import { SignupComponent } from '../signup/signup.component';
import { EncryDecryUtility } from '../../../utils/encry&decry-utility';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public modalRef:any;
  verifyOTPRes:verifyOTP | undefined;
  isLoading:boolean = false;
  source : number | undefined;
  constructor(private SocialAuthService: SocialAuthService ,private AuthService:AuthService,private modalService: BsModalService,private toastr: ToastrService) { }

  ngOnInit(): void {
    //console.log("my data is :- "+ this.data);
    this.source = environment.source;
  }

  signinwithgoogle(){
    console.log("google login");
    this.SocialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (res)=>{
        console.log("google res :- "+ JSON.stringify(res));
        this.AuthService.googleSignIn(res.idToken,this.source).subscribe(
          (data)=>{
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
          (err)=>{
            console.log(" backend google err :- "+ JSON.stringify(err));
            this.toastr.success("Somethings wents wrong please Login again.", '', { timeOut: 5000,});
          }
        )
      },
      (err)=>{
        console.log("google err :- "+ JSON.stringify(err));
        this.toastr.success("Somethings wents wrong please Login again.", '', { timeOut: 5000,});
      }
    )
  }

  signinwithfacebook(){
    console.log("facebook login");
    this.SocialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      (res)=>{
        console.log("facebook res :- "+ JSON.stringify(res));
        this.AuthService.facebookSignIn(res.idToken,this.source).subscribe(
          (data)=>{
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
          (err)=>{
            console.log(" backend facebook err :- "+ JSON.stringify(err));
            this.toastr.success("Somethings wents wrong please Login again.", '', { timeOut: 5000,});
          }
        )
      },
      (err)=>{
        console.log("facebook err :- "+ JSON.stringify(err));
        this.toastr.success("Somethings wents wrong please Login again.", '', { timeOut: 5000,});
      }
    )
  }

  openForgotpasswordModel(){
    this.modalRef.hide();
    this.modalRef = this.modalService.show(ForgotpasswordComponent);
    this.modalRef.content.modalRef=  this.modalRef;
  }

  login(){
    this.modalRef.hide();
  }

  openLoginWithOtpModel(){
    this.modalRef.hide();
    this.modalRef = this.modalService.show(LoginphonenoComponent);
    this.modalRef.content.modalRef=  this.modalRef;
  }

  openSignupModel(){
    this.modalRef.hide();
    this.modalRef = this.modalService.show(SignupComponent);
    this.modalRef.content.modalRef=  this.modalRef;
  }

}





