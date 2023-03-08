import { Component, Input, OnInit } from '@angular/core';

interface RatingButton {
  rating: number;
  selected: boolean;
  ariaLabel: string;
}

@Component({
  selector: 'app-rating-button-list',
  templateUrl: './rating-button-list.component.html',
  styleUrls: ['./rating-button-list.component.scss']
})
export class RatingButtonListComponent implements OnInit {

  @Input() 
  public buttonsAmount: number = 5;
  
  public buttonList: RatingButton[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initilizeButtons();
  }

  private initilizeButtons(): void {
    for(let buttonRating = 1; buttonRating <= this.buttonsAmount; buttonRating ++) {
      let ariaLabel = `Avaliado como ${buttonRating} `;
      
      if(buttonRating === 1) {
        ariaLabel += 'estrela.';
      } else {
        ariaLabel += 'estralas.';
      }

      const newButton: RatingButton = {
        rating: buttonRating,
        selected: false,
        ariaLabel: ariaLabel
      }
      
      this.buttonList.push(newButton);
    }
  }

}
