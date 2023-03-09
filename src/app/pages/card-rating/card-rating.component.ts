import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-rating',
  templateUrl: './card-rating.component.html',
  styleUrls: ['./card-rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardRatingComponent implements OnInit {

  public checkedRating: number | null = null;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public setCheckedRating(rating: number): void {
    this.checkedRating = rating;
  }

  public onSubmitRating(): void {
    console.log(this.checkedRating)
    this.router.navigate(['/thank-you', this.checkedRating]);
  }
}