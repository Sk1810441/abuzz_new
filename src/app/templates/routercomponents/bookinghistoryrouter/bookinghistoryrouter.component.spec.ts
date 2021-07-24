import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinghistoryrouterComponent } from './bookinghistoryrouter.component';

describe('BookinghistoryrouterComponent', () => {
  let component: BookinghistoryrouterComponent;
  let fixture: ComponentFixture<BookinghistoryrouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookinghistoryrouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookinghistoryrouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
