import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { profileDetails } from 'src/app/store/models/userprofile';
import { profileRepository } from 'src/app/store/repositories/profile.repository';
import { AuthService } from 'src/app/store/services/auth.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,OnDestroy{

  loading: boolean = false;
  loaded: boolean = false;
  error: boolean = false;
  isAlive: boolean = false;
  loggedIn:boolean=false;
  loaderTitle: string = "Fetching data Please wait....";
  source = environment.source;
  userDetails: profileDetails | undefined;
  errormessage : string | undefined;

  constructor( private profileRepository: profileRepository,private authServie:AuthService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.isAlive = true;
    this.loggedIn = this.authServie.isLogin();
    if(this.loggedIn){
      this.getProfileData();
    }
    // console.log(this.userDetails?.profileImageHttp);
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  tryAgain() {
    this.profileRepository.getProfileDetails(true);
  }

  getProfileData() {
    this.loading=true;
    this.loaded=false;
    const observer$ = this.profileRepository.getProfileDetails();
    const profiledata$ = observer$[1];
    const loading$ = observer$[0];
    const error$ = observer$[2];
    const loaded$ = observer$[3];
    profiledata$.pipe(takeWhile(() => this.isAlive)).subscribe(profileDetails => {
      this.userDetails = profileDetails;
      this.loaded=true;
      this.loading=false;
    });

    loading$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.loading = data;

    });
    error$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.error = data;

    });
    loaded$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.loaded = data;

    });

  }

}
