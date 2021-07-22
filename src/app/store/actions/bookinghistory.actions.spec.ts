import * as fromBookinghistory from './bookinghistory.actions';

describe('loadBookinghistorys', () => {
  it('should return an action', () => {
    expect(fromBookinghistory.loadBookinghistorys().type).toBe('[Bookinghistory] Load Bookinghistorys');
  });
});
