import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingButtonListComponent } from './rating-button-list.component';

describe('RatingButtonListComponent', () => {
  let component: RatingButtonListComponent;
  let fixture: ComponentFixture<RatingButtonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingButtonListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingButtonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
