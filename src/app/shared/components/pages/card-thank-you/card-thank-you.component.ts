import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-thank-you',
  templateUrl: './card-thank-you.component.html',
  styleUrls: ['./card-thank-you.component.scss']
})
export class CardThankYouComponent implements OnInit {

  @Input() ratingSelectedMessage: string = "You selected 4 out of 5";

  constructor() { }

  ngOnInit(): void {
  }

}
