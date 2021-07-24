import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginphonenoComponent } from './loginphoneno.component';

describe('LoginphonenoComponent', () => {
  let component: LoginphonenoComponent;
  let fixture: ComponentFixture<LoginphonenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginphonenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginphonenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
