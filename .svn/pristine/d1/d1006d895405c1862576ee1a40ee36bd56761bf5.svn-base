import { OnDestroy } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { Store } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';
import { profileDetails } from 'src/app/store/models/userprofile';
import { profileRepository } from 'src/app/store/repositories/profile.repository';
import { AuthService } from 'src/app/store/services/auth.service';
import { DataService } from 'src/app/store/services/data.service';
import { EncryDecryUtility } from 'src/app/utils/encry&decry-utility';
import { environment } from 'src/environments/environment';
import * as fromProfile from '../../../store/selectors/profile.selectors';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit, OnDestroy {

  public modalRef: any;
  userDetails: profileDetails | undefined;
  isAlive: boolean = false;
  jwtToken: string | undefined;
  source: number = environment.source;
  loading: boolean = false;
  loaded: boolean = false;
  error: boolean = false;
  form = new FormGroup({});

  constructor(private profileRespo: profileRepository, private authService: AuthService, private store: Store, private datepipe: DatePipe) { }
  ngOnInit(): void {
    this.isAlive = true;
    const getProfileData$ = this.store.select(fromProfile.getProfileDetails);
    getProfileData$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.userDetails = data;
    });
    // this.dataService.data.subscribe(res => {
    //   // this is subject behaveare get value example
    // });
    console.log("user"+this.userDetails?.dob);
    this.jwtToken = String(this.authService.getjwtToken());
    this.form = new FormGroup({
      name: new FormControl(this.userDetails?.name, [Validators.required]),
      lastname: new FormControl(this.userDetails?.lastname, [Validators.required]),
      gender: new FormControl((this.userDetails?.gender == 'M' ? 'Male' : 'Female'), [Validators.required]),
      dob: new FormControl(this.dateFormat(this.userDetails?.dob), [Validators.required])
    })
    console.log(this.dateFormat(this.userDetails?.dob));
    
  }
  dateFormat(dob:any): any {
    console.log("date"+dob);
    const dateString = this.datepipe.transform(dob, 'yyyy-MM-dd');
    console.log("date"+dateString);
    return dateString;
  }
  ngOnDestroy() {
    this.isAlive = false;
  }
  hide() {
    this.modalRef.hide();
  }
  get f() {
    return this.form.controls;
  }
 
  submit(form: any) {
    Object.assign(form.value, { jwtToken: this.jwtToken });
    Object.assign(form.value, { source: this.source });
    this.updateProfile();
    this.modalRef.hide();
  }
  updateProfile() {
    this.loading = true;
    this.loaded = false;
    let userId = Number(this.authService.getuserid());
    const observer$ = this.profileRespo.updateProfileDetails(userId, this.form.value);
    const updateprofiledata$ = observer$[1];
    updateprofiledata$.pipe(takeWhile(() => this.isAlive)).subscribe(userDetails => {
      this.loaded = true;
      this.loading = false;
     // this.dataService.updatedData(userDetails);
      if (userDetails?.name) {
        this.authService.updateisuserlogin(userDetails?.name);
        localStorage.setItem(EncryDecryUtility.set(environment.key, 'username'), EncryDecryUtility.set(environment.key, String(userDetails?.name)));
      }

    });


  }
}
