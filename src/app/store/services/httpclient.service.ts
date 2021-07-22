import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpclientService {

  public baseUrl = environment.baseUrl;
  public baseUrlpayment = environment.baseUrlpayment;
  public source = environment.source;
  //public baseUrl = 'http://127.0.0.1:8080/';
  AUTH_TOKEN = 'auth_token';

  constructor() { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'},)
  };

  errorData: {} = {};

  public getAuthHeader(): { [header: string]: string | string[]; } {
    return {
      Authorization: `Bearer ${localStorage.getItem(this.AUTH_TOKEN)}`
    };
  }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }

}