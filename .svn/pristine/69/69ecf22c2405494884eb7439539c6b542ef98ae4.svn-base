import {Injectable} from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable} from 'rxjs';
import { BookingService } from './../services/booking.service';
import { bookingDetails } from './../models/bookinghistory';
import { take } from 'rxjs/operators';
import * as BookingHistoryActions from '../../store/actions/bookinghistory.actions';
import * as fromBookingHistory from '../../store/selectors/bookinghistory.selectors';

@Injectable()
export class BookingHistoryRepository {
  
  constructor( private store: Store<any> ,  private BookingService: BookingService ) { }

  getBookingHistory(force = false , obj: any, userId: number): [Observable<boolean>, Observable<bookingDetails[]>, Observable<boolean>, Observable<boolean>] {
    const loading$ = this.store.select(fromBookingHistory.getBookingHistoryLoading);
    const loaded$ = this.store.select(fromBookingHistory.getBookingHistoryLoaded);
    const getBookingHistoryData$ = this.store.select(fromBookingHistory.getBookingHistorys);
    const getError$ = this.store.select(fromBookingHistory.getError);

    combineLatest([loaded$, loading$]).pipe(take(1)).subscribe((data) => {
      if ((!data[0] && !data[1]) || force) {
        this.store.dispatch(new BookingHistoryActions.LoadBookingHistorys());
        this.BookingService.getBookings(obj,userId).subscribe(res => {
          if(res.statusDescription.statusCode == 200){
            this.store.dispatch(new BookingHistoryActions.LoadBookingHistorysSuccess({data : res.bookingMaster }));
          }else{
            this.store.dispatch(new BookingHistoryActions.LoadBookingHistorysFailure({ errorMessaage: res.statusDescription.statusMessage }));
          }
          }, error => {
          this.store.dispatch(new BookingHistoryActions.LoadBookingHistorysFailure({ errorMessaage: "Somethings wents wrong" }));
        });
      }
    });
    return [loading$, getBookingHistoryData$, getError$ , loaded$];
  }

}

