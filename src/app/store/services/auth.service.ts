import { Injectable } from '@angular/core';
import { HttpclientService } from './httpclient.service';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { sendOTP, verifyOTP } from '../models/auth';
import { EncryDecryUtility } from '../../utils/encry&decry-utility';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private contentisuserlogin = new BehaviorSubject<string>("");
  public shareisuserlogin = this.contentisuserlogin.asObservable();

  constructor(private HttpclientService: HttpclientService,private HttpClient: HttpClient) { }

  updateisuserlogin(isuserlogin:string){
    this.contentisuserlogin.next(isuserlogin);
  }

  getjwtToken(){
    return localStorage.getItem(EncryDecryUtility.set(environment.key,'jwtToken'));
  }

  getjwtRefreshToken(){
    return localStorage.getItem(EncryDecryUtility.set(environment.key,'jwtRefreshToken'));
  }

  getuserid(){
    return EncryDecryUtility.get(environment.key,String(localStorage.getItem(EncryDecryUtility.set(environment.key,'userid'))));
  }

  isLogin(){
    if(this.getuserid() && this.getjwtRefreshToken() && this.getjwtToken()){
      this.updateisuserlogin(String(EncryDecryUtility.get(environment.key,String(localStorage.getItem(EncryDecryUtility.set(environment.key,'username'))))));
      return true;
    }else{
      this.updateisuserlogin("");
      return false;
    }
  }

  googleSignIn(idToken:string,source:any):Observable<any> {
    return this.HttpClient.get<any>(this.HttpclientService.baseUrl+'account/v1/login/google?idToken='+idToken+'&source='+source,
    this.HttpclientService.httpOptions).pipe(catchError(this.HttpclientService.handleError));
  }

  facebookSignIn(idToken:string, source:any):Observable<any>{
    return this.HttpClient.get<any>(this.HttpclientService.baseUrl+'account/v1/login/facebook?idToken='+idToken+'&source='+source,
    this.HttpclientService.httpOptions).pipe(catchError(this.HttpclientService.handleError));
  }

  sendOTP(msisdn:string):Observable<sendOTP>{
    return this.HttpClient.post<sendOTP>(this.HttpclientService.baseUrl+'account/v1/register/pin/push',
    {
      "msisdn":environment.countrycode+msisdn,
      "source":this.HttpclientService.source
    },this.HttpclientService.httpOptions).pipe(catchError(this.HttpclientService.handleError));
  }

  verifyOTP(msisdn:string,transactionId:string,otp:string):Observable<verifyOTP>{
    return this.HttpClient.post<verifyOTP>(this.HttpclientService.baseUrl+'account/v1/register/pin/confirm',
    {
      "msisdn":environment.countrycode+msisdn,
      "source":this.HttpclientService.source,
      "transactionId":transactionId,
      "otp":otp
    },this.HttpclientService.httpOptions).pipe(catchError(this.HttpclientService.handleError));
  }

  signUp(obj:any):Observable<any>{
    return this.HttpClient.post<any>(this.HttpclientService.baseUrl+'account/v1/signup/pin/push',obj,
    this.HttpclientService.httpOptions).pipe(catchError(this.HttpclientService.handleError));
  }

}
