import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingguestdetailsComponent } from './bookingguestdetails.component';

describe('BookingguestdetailsComponent', () => {
  let component: BookingguestdetailsComponent;
  let fixture: ComponentFixture<BookingguestdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingguestdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingguestdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
