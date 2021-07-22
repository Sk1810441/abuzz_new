import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelfeaturesComponent } from './hostelfeatures.component';

describe('HostelfeaturesComponent', () => {
  let component: HostelfeaturesComponent;
  let fixture: ComponentFixture<HostelfeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelfeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelfeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
