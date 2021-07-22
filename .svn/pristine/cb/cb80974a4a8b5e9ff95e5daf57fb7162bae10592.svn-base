import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paymentstatus',
  templateUrl: './paymentstatus.component.html',
  styleUrls: ['./paymentstatus.component.css']
})
export class PaymentstatusComponent implements OnInit {

  status:number | undefined;
  constructor(private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.status = Number(this.activatedRoute.snapshot.paramMap.get('status'));
    setTimeout(() =>{
      this.router.navigate(['/profile/bookinghistory']);
    }, 5000);  
  }

}
