import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatpadComponent } from './beatpad.component';

describe('BeatpadComponent', () => {
  let component: BeatpadComponent;
  let fixture: ComponentFixture<BeatpadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeatpadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeatpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
