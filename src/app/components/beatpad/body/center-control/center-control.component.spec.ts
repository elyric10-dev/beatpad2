import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterControlComponent } from './center-control.component';

describe('CenterControlComponent', () => {
  let component: CenterControlComponent;
  let fixture: ComponentFixture<CenterControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
