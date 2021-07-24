import { Injectable } from '@angular/core';
import { HttpclientService } from './httpclient.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(private HttpclientService: HttpclientService,private HttpClient: HttpClient) { }

  getbills(obj:any,userId:number,locationID:number): Observable<any> {
    return this.HttpClient.post<any>(this.HttpclientService.baseUrl+'booking/v1/availability/user/'+userId+'/location/'+locationID,obj,
    this.HttpclientService.httpOptions
    ).pipe(catchError(this.HttpclientService.handleError));
  }

  payment(requestobject:any,userId:number,locationId:number):Observable<any> {
    return this.HttpClient.post<any>(this.HttpclientService.baseUrlpayment+'/gw/payment/v1/user/'+locationId+'/location/'+userId,requestobject,
    this.HttpclientService.httpOptions
    ).pipe(catchError(this.HttpclientService.handleError));
  }


  paymentgatewayredirect(requestobj:any,url:string):Observable<any> {
    return this.HttpClient.post<any>(url,requestobj,
    this.HttpclientService.httpOptions
    ).pipe(catchError(this.HttpclientService.handleError));
  }

  
}
