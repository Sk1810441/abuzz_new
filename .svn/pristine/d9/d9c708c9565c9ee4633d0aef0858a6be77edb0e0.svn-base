import { Injectable } from '@angular/core';
import { HttpclientService } from './httpclient.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private HttpclientService: HttpclientService,private HttpClient: HttpClient) { }

  getAllLocation(): Observable<any> {
    return this.HttpClient.get<any>(this.HttpclientService.baseUrl+'location/v1/all',
    this.HttpclientService.httpOptions
    ).pipe(catchError(this.HttpclientService.handleError));
  }

}
