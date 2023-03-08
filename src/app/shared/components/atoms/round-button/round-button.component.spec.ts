import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundButtonComponent } from './round-button.component';

describe('RoundButtonComponent', () => {
  let component: RoundButtonComponent;
  let fixture: ComponentFixture<RoundButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
