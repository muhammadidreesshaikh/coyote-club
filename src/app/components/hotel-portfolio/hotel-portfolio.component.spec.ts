import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelPortfolioComponent } from './hotel-portfolio.component';

describe('HotelPortfolioComponent', () => {
  let component: HotelPortfolioComponent;
  let fixture: ComponentFixture<HotelPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
