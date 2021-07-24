import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingdetailComponent } from './bookingdetail.component';

describe('BookingdetailComponent', () => {
  let component: BookingdetailComponent;
  let fixture: ComponentFixture<BookingdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
