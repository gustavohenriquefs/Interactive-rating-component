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

  @Input()
  public idQuestion: string = "";

  @Input()
  public idDescription: string = "";
  
  public buttonList: RatingButton[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initilizeButtons();
  }

  private initilizeButtons(): void {
    for(let buttonRating = 1; buttonRating <= this.buttonsAmount; buttonRating ++) {
      let ariaLabel = `Avaliado em ${buttonRating} de ${this.buttonsAmount}`;


      const newButton: RatingButton = {
        rating: buttonRating,
        selected: false,
        ariaLabel: ariaLabel
      }
      
      this.buttonList.push(newButton);
    }
  }

}
