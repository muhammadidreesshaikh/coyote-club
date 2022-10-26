import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameTwoComponent } from './frame-two.component';

describe('FrameTwoComponent', () => {
  let component: FrameTwoComponent;
  let fixture: ComponentFixture<FrameTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
