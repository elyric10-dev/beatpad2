import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPadComponent } from './right-pad.component';

describe('RightPadComponent', () => {
  let component: RightPadComponent;
  let fixture: ComponentFixture<RightPadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightPadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
