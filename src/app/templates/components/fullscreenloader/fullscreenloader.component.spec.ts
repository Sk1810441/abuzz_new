import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenloaderComponent } from './fullscreenloader.component';

describe('FullscreenloaderComponent', () => {
  let component: FullscreenloaderComponent;
  let fixture: ComponentFixture<FullscreenloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullscreenloaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullscreenloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
