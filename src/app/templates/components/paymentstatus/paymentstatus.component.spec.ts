import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentstatusComponent } from './paymentstatus.component';

describe('PaymentstatusComponent', () => {
  let component: PaymentstatusComponent;
  let fixture: ComponentFixture<PaymentstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
