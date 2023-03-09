import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardThankYouComponent } from './card-thank-you.component';

describe('CardThankYouComponent', () => {
  let component: CardThankYouComponent;
  let fixture: ComponentFixture<CardThankYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardThankYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
