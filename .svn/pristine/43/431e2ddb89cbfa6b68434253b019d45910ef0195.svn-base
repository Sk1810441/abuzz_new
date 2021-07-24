import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  public modalRef:any;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  requestLink(){
    this.modalRef.hide();
  }

  openLoginModel(){
    this.modalRef.hide();
    this.modalRef = this.modalService.show(LoginComponent);
    this.modalRef.content.modalRef=  this.modalRef;
  }


}
