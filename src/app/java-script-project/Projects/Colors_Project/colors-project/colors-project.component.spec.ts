import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsProjectComponent } from './colors-project.component';

describe('ColorsProjectComponent', () => {
  let component: ColorsProjectComponent;
  let fixture: ComponentFixture<ColorsProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
