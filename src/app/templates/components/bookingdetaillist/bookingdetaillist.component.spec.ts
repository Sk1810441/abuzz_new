import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingdetaillistComponent } from './bookingdetaillist.component';

describe('BookingdetaillistComponent', () => {
  let component: BookingdetaillistComponent;
  let fixture: ComponentFixture<BookingdetaillistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingdetaillistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingdetaillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
