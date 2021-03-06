import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DataService } from 'src/app/store/services/data.service';
import { AuthService } from '../../../store/services/auth.service';
import { LoginComponent } from '../../components/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  modalRef: BsModalRef | undefined;
  status:boolean | undefined;
  username:string | undefined;
  constructor(private modalService: BsModalService,private Authservice : AuthService,private dataService:DataService) {}

  ngOnInit(): void {
    this.status = this.Authservice.isLogin();
    this.Authservice.shareisuserlogin.subscribe(
      data => { 
        this.username = data,
        this.status = (data =="null" || data=="") ?false:true
      });
  }

  openLoginModal() {
    this.modalRef = this.modalService.show(LoginComponent);
    this.modalRef.content.modalRef=  this.modalRef;
  }

  Logout(){
    localStorage.clear();
    window.sessionStorage.clear();
    window.location.reload();
  }

}
