import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpclientService } from './httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class AddGuestService {

  constructor(private HttpClientService:HttpclientService,private HttpClient:HttpClient) { }

  AddGuest(userId:any,formData:any):Observable<any>{
    return this.HttpClient.post<any>(this.HttpClientService.baseUrl + '/contacts/v2/update/'+userId,formData,
    ).pipe(
      catchError(this.HttpClientService.handleError)
    )
  }
}
