import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginoptComponent } from './loginopt.component';

describe('LoginoptComponent', () => {
  let component: LoginoptComponent;
  let fixture: ComponentFixture<LoginoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginoptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
