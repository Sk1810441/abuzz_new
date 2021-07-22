import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpclientService } from './httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private HttpClientService:HttpclientService,private HttpClient:HttpClient) { }

  getProfile(userId:number,source:number,token:any):Observable<any>{
    return this.HttpClient.get<any>(this.HttpClientService.baseUrl+'account/profile/'+userId+'/source/'+source+'?jwtToken='+token,
    this.HttpClientService.httpOptions
    ).pipe(catchError(this.HttpClientService.handleError))
  }

  updateProfileDetails(userId:number,form:any):Observable<any>{
    return this.HttpClient.post<any>(this.HttpClientService.baseUrl+"account/v1/update/"+userId,form,
    this.HttpClientService.httpOptions
    ).pipe(catchError(this.HttpClientService.handleError))
  }

  AddGuest(userId:any,formData:any):Observable<any>{
    return this.HttpClient.post<any>(this.HttpClientService.baseUrl + '/contacts/v2/update/'+userId,formData,
    ).pipe(catchError(this.HttpClientService.handleError))
  }

  getProfileImage(userId: number, source: number, token: any, imageName: any): Observable<any> {
    return this.HttpClient.post<any>(this.HttpClientService.baseUrl + 'account/v1/upload/' + userId + '?source=' + source + '&jwtToken=' + token, imageName
    ).pipe(catchError(this.HttpClientService.handleError))
  }

}
