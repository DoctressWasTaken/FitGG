import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveWorkoutLandingComponent } from './active-workout-landing.component';

describe('ActiveWorkoutLandingComponent', () => {
  let component: ActiveWorkoutLandingComponent;
  let fixture: ComponentFixture<ActiveWorkoutLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveWorkoutLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveWorkoutLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
