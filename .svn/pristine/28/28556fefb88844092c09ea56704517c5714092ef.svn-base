import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../store/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  modalRef: BsModalRef | undefined;
  constructor(private modalService: BsModalService,private toastr: ToastrService , private AuthService : AuthService){}
  canActivate() :boolean{
    if(this.AuthService.isLogin()){
      return true;
    }else{
      this.toastr.error("Please Login", '', { timeOut: 5000,});
      return false;
    }
  }
  
}
