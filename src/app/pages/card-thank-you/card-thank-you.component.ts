import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-thank-you',
  templateUrl: './card-thank-you.component.html',
  styleUrls: ['./card-thank-you.component.scss']
})
export class CardThankYouComponent implements OnInit {

  ratingSelectedMessage: string = "";

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getRatingParam();
  }

  public getRatingParam(): void {
    const rating = this.activatedRoute.snapshot.paramMap.get("rating");
    this.ratingSelectedMessage = `You selected ${ rating } out of 5`
  }

}
