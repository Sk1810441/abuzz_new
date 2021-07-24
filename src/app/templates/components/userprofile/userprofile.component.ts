import { Component, Input, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { AuthService } from 'src/app/store/services/auth.service';
import { ProfileImageService } from 'src/app/store/services/profile-image.service';
import { environment } from 'src/environments/environment';
import * as ProfileAction from '../../../store/actions/profile.actions';
import * as fromProfile from '../../../store/selectors/profile.selectors';
import { profileDetails } from 'src/app/store/models/userprofile';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  @Input() userName: string | undefined;
  @Input() userImage: string | undefined;
  constructor(private SocialAuthService: SocialAuthService,private ActivatedRoute:ActivatedRoute , private router: Router, private profileimageService: ProfileImageService, private authService: AuthService, private store:Store) { }
  loading: boolean = false;
  source = environment.source;
  selectedFile: any;
  public userDetails: profileDetails | undefined;
  url:any;
  file: any;
  localData:any;

  ngOnInit(): void { 
    // console.log(this.userImage);
    // console.log(this.userDetails?.profileImageHttp);
   
     if (!this.userImage || this.userImage  == ""){
        this.url = "../../../../assets/customimage/profilepic.png";
     } else {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
       this.url = this.userImage;
     }
  }
  
  logout() {
    this.SocialAuthService.signOut();
    localStorage.clear();
    window.sessionStorage.clear();
    setTimeout(() => {
      window.location.reload();
    }, 100);
    this.router.navigate(['/']);
  }
  //
  // onFileSelect(event: any) {
  //   this.file = event.target.files[0];
  //   // console.log(event.target.files.item(0));

  //   if (event.target.files) {
  //     var reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0]);
  //     reader.onload = (event: any) => {
  //       this.url = event.target.result;
  //     }

  //   this.file = event.target.files[0];
  //     this.getProfileImage(this.file);
  //     // console.log(this.file);
  //   }
  // }
  getProfileImage(file: any) {
    this.loading = true;
    let userId = Number(this.authService.getuserid());
    let token = this.authService.getjwtToken();
    // console.log(file.name);
    this.profileimageService.getProfileImage(userId, this.source, token, this.file).subscribe(data => {
      // console.log("profile" + data);
      this.userDetails = data;
    }, error => {
      // console.log("erroe" + error);
    });
  }
  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0]
    // console.log(this.selectedFile);

    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }

      this.file = event.target.files[0];
      // console.log(this.file);
    }
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    this.loading = true;
    let userId = Number(this.authService.getuserid());
    let token = this.authService.getjwtToken();

    this.profileimageService.getProfileImage(userId, this.source, token, formData).subscribe(data => {
      // console.log("profile" + data);
      this.userDetails = data;
    });
  }
  gotobookinghistory(){
    this.router.navigate(['bookinghistory'], { relativeTo: this.ActivatedRoute });
  }


}
