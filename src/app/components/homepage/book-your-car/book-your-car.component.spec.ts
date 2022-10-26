import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookYourCarComponent } from './book-your-car.component';

describe('BookYourCarComponent', () => {
  let component: BookYourCarComponent;
  let fixture: ComponentFixture<BookYourCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookYourCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookYourCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
