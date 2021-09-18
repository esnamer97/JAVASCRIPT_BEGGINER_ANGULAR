import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaScriptProjectComponent } from './java-script-project.component';

describe('JavaScriptProjectComponent', () => {
  let component: JavaScriptProjectComponent;
  let fixture: ComponentFixture<JavaScriptProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaScriptProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaScriptProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
