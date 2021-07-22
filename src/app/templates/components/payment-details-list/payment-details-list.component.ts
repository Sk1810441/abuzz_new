import { Component, Input, OnInit } from '@angular/core';
import { Payments } from './../../../store/models/bookingdetail';

@Component({
  selector: 'app-payment-details-list',
  templateUrl: './payment-details-list.component.html',
  styleUrls: ['./payment-details-list.component.css']
})
export class PaymentDetailsListComponent implements OnInit {
  
  @Input() payments : Payments[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  goToLink(payment: Payments){
    window.open(payment.receiptLink);
}

}
