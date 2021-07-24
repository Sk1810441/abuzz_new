import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestdetailComponent } from './guestdetail.component';

describe('GuestdetailComponent', () => {
  let component: GuestdetailComponent;
  let fixture: ComponentFixture<GuestdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
