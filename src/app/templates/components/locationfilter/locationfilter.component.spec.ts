import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationfilterComponent } from './locationfilter.component';

describe('LocationfilterComponent', () => {
  let component: LocationfilterComponent;
  let fixture: ComponentFixture<LocationfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationfilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
