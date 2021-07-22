import { Injectable } from '@angular/core';
import { HttpclientService } from './httpclient.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private HttpclientService: HttpclientService,private HttpClient: HttpClient) { }

  getBookings(obj:any,userId:number): Observable<any> {
    return this.HttpClient.post<any>(this.HttpclientService.baseUrl+'bookings/v1/past/user/'+userId,obj,
    this.HttpclientService.httpOptions).pipe(catchError(this.HttpclientService.handleError));
  }

  getBookingDetail(obj:any,userId:number){
    return this.HttpClient.post<any>(this.HttpclientService.baseUrl+'booking/v1/user/'+userId,obj,
    this.HttpclientService.httpOptions).pipe(catchError(this.HttpclientService.handleError));
  }

  getguestlist(obj:any,userId:number){
    return this.HttpClient.post<any>(this.HttpclientService.baseUrl+'contacts/v1/'+userId,obj,
    this.HttpclientService.httpOptions).pipe(catchError(this.HttpclientService.handleError));
  }

  attachtobooking(obj:any,userId:number){
    return this.HttpClient.post<any>(this.HttpclientService.baseUrl+'booking/v1/attachment/user/'+userId,obj,
    this.HttpclientService.httpOptions).pipe(catchError(this.HttpclientService.handleError));
  }

  cancelBooking(obj:any,userId:number){
    return this.HttpClient.post<any>(this.HttpclientService.baseUrl+'cancelbooking/v1/user/'+userId,obj,
    this.HttpclientService.httpOptions).pipe(catchError(this.HttpclientService.handleError));
  }




}
