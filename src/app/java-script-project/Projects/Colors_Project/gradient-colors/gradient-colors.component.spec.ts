import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientColorsComponent } from './gradient-colors.component';

describe('GradientColorsComponent', () => {
  let component: GradientColorsComponent;
  let fixture: ComponentFixture<GradientColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradientColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
