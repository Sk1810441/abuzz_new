import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddGuestService } from 'src/app/store/services/add-guest.service';
import { AuthService } from 'src/app/store/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-addguest',
  templateUrl: './addguest.component.html',
  styleUrls: ['./addguest.component.css']
})
export class AddguestComponent implements OnInit {

  frontSide:any;
  backSide:any;
  documnet:any;
  loading:boolean=false;
  public modalRef: any;
  sumbitted:boolean=false;

  source:Number=environment.source;

  constructor( private authService: AuthService,private AddGuestService:AddGuestService) { }

  ngOnInit(): void {
  }
  form = new FormGroup({
  MobileNo :new FormControl('',[Validators.required,Validators.maxLength(10)]),
  FirstName:new FormControl('',[Validators.required]),
  LastName:new FormControl('',[Validators.required]),
  EmergencyName:new FormControl('',[Validators.required]),
  EmergencyNumber:new FormControl('',[Validators.required]),


  });
  
  selectDocument(event:any){
    // console.log(event.target.value);
    if(event.target.value==0){
      this.documnet="Adhar card";
      // console.log("Adhar card");

    }else if(event.target.value==1){
      this.documnet="passport";
      // console.log("passport");
    }else if(event.target.value==2){
      this.documnet="voter id";
        // console.log("voter id");
      }else{
        this.documnet="Driving Licence";
           // console.log("Driving Licence");
      }
    }

    FrontSide(event:any){
   this.frontSide = event.target.files[0]
   // console.log("forntside"+this.frontSide);

    }
    BackSide(event:any){
      this.backSide = event.target.files[0]
      // console.log("backside"+this.backSide);
    }

    get f(){
      return this.form.controls;
    }
 
    formUpload(form:any){
     this.loading = true;
     // console.log("mobile"+form.value.MobileNo);
     let userId = Number(this.authService.getuserid());
     let token = String(this.authService.getjwtToken());
     let source=String(environment.source);
      // console.log(this.form.value.name); 
      const formData = new FormData();
      formData.append('jwtToken',token);
      formData.append('msisdn',form.value.MobileNo);
      formData.append('name',form.value.FirstName);
      formData.append('docType',this.documnet);
      formData.append('lastname',form.value.LastName);
      formData.append('source',source);
      formData.append('emergencyName',form.value.EmergencyName);
      formData.append('emergencyNumber',form.value.EmergencyNumber);
      formData.append('file',this.frontSide);
      formData.append('fileBack',this.backSide);
      this.AddGuestService.AddGuest(userId,formData).subscribe(data=>{
        // console.log(data);
      })
      window.location.reload();
    }

  
     
 
  

}
