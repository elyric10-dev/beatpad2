import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceButtonComponent } from './performance-button.component';

describe('PerformanceButtonComponent', () => {
  let component: PerformanceButtonComponent;
  let fixture: ComponentFixture<PerformanceButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
