import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameThreeComponent } from './frame-three.component';

describe('FrameThreeComponent', () => {
  let component: FrameThreeComponent;
  let fixture: ComponentFixture<FrameThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
