import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpclientService } from './httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileImageService {

  constructor(private HttpClientService: HttpclientService, private HttpClient: HttpClient) { }

  getProfileImage(userId: number, source: number, token: any, imageName: any): Observable<any> {
    return this.HttpClient.post<any>(this.HttpClientService.baseUrl + 'account/v1/upload/' + userId + '?source=' + source + '&jwtToken=' + token, imageName
    ).pipe(
      catchError(this.HttpClientService.handleError)
    )

  }
}
