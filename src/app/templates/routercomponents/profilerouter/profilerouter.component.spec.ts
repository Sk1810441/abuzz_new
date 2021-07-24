import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerouterComponent } from './profilerouter.component';

describe('ProfilerouterComponent', () => {
  let component: ProfilerouterComponent;
  let fixture: ComponentFixture<ProfilerouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilerouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilerouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
