import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-rating',
  templateUrl: './card-rating.component.html',
  styleUrls: ['./card-rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardRatingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
