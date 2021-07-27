import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { profileDetails } from 'src/app/store/models/userprofile';
import { EditProfileComponent } from '../../popup/edit-profile/edit-profile.component';



@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  @Input() userDetails: profileDetails | undefined;
  modalRef: any;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  edit() {
    this.modalRef = this.modalService.show(EditProfileComponent);
    this.modalRef.content.modalRef = this.modalRef;
    this.modalRef.content.userDetails = this.userDetails;
  }
}



