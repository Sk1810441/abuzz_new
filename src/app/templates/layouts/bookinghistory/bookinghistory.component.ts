import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/store/services/auth.service';
import { environment } from '../../../../environments/environment';
import { BookingHistoryRepository } from '../../../store/repositories/bookinghistory.repository';
import { ToastrService } from 'ngx-toastr';
import { takeWhile } from 'rxjs/operators';
import { bookingDetails } from 'src/app/store/models/bookinghistory';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {

  bookingDetails:bookingDetails[] = [];
  pastBookingDetails:bookingDetails[] = [];
  currentBookingDetails:bookingDetails[] = [];
  upcommingBookingDetails:bookingDetails[] = [];
  cancelledBookingDetails:bookingDetails[] = [];

  loggedIn:boolean=false;
  loading:boolean=false;
  loaded:boolean=false;
  error:boolean=false;
  isAlive:boolean=false;
  loaderTitle:string = "Fetching data Please wait....";

  constructor(private BookingHistoryRepository:BookingHistoryRepository,private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.isAlive=true;
    this.loggedIn = this.authService.isLogin();
    if(this.loggedIn){
      this.getBookingHistoryList();
    }
  }

  ngOnDestroy(): void{
    this.isAlive=false;
  }

  getBookingHistoryList(force=false){
    let obj = {
      "jwtToken":this.authService.getjwtToken(),
      "source": environment.source,
      "fetchSize":100,
      "lastFetchedId":0
    }
    const userid = Number(this.authService.getuserid());
    const observer$ = this.BookingHistoryRepository.getBookingHistory(force,obj,userid);
    const bookinghistoryData$ = observer$[1];
    const loading$ = observer$[0];
    const loaded$ = observer$[3];
    const error$ = observer$[2];

    bookinghistoryData$.pipe(takeWhile(() => this.isAlive)).subscribe(bookinghistory => {

      bookinghistory.forEach( element => {
        this.bookingDetails.push(element);
        if (element.bookingStatus=="1") {
          this.currentBookingDetails.push(element);
        } else if (element.bookingStatus=="0" || element.bookingStatus=="7") {
          this.upcommingBookingDetails.push(element);
        } else if (element.bookingStatus=="3" || element.bookingStatus=="4") {
          this.pastBookingDetails.push(element);
        } else if (element.bookingStatus=="2" || element.bookingStatus=="6") {
          this.cancelledBookingDetails.push(element);
        }
      })
    });

    loaded$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.loaded = data;
    });
    loading$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.loading = data;
    });
    error$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.error = data;
    });
    
  }

  tryAgain() {
    this.getBookingHistoryList(true);
  }

}

