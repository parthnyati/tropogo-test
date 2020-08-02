import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteOnboardingComponent } from './institute-onboarding.component';

describe('InstituteOnboardingComponent', () => {
  let component: InstituteOnboardingComponent;
  let fixture: ComponentFixture<InstituteOnboardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteOnboardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
