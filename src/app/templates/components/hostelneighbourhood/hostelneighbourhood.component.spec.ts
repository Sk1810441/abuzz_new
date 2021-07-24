import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelneighbourhoodComponent } from './hostelneighbourhood.component';

describe('HostelneighbourhoodComponent', () => {
  let component: HostelneighbourhoodComponent;
  let fixture: ComponentFixture<HostelneighbourhoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelneighbourhoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelneighbourhoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
