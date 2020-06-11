import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumCarouselComponent } from './premium-carousel.component';

describe('PremiumCarouselComponent', () => {
  let component: PremiumCarouselComponent;
  let fixture: ComponentFixture<PremiumCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
