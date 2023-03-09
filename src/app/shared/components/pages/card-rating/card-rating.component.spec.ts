import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRatingComponent } from './card-rating.component';

describe('CardRatingComponent', () => {
  let component: CardRatingComponent;
  let fixture: ComponentFixture<CardRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
