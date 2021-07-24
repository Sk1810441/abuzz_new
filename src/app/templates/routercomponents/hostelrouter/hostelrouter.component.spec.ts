import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelrouterComponent } from './hostelrouter.component';

describe('HostelrouterComponent', () => {
  let component: HostelrouterComponent;
  let fixture: ComponentFixture<HostelrouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelrouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelrouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
