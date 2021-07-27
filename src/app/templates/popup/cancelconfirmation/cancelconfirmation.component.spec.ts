import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelconfirmationComponent } from './cancelconfirmation.component';

describe('CancelconfirmationComponent', () => {
  let component: CancelconfirmationComponent;
  let fixture: ComponentFixture<CancelconfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelconfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
