import { AppButton } from './../../../models/buttons.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

interface RatingButton {
  rating: number;
  selected: boolean;
  ariaLabel: string;
  btnStyle: AppButton;
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

  @Output()
  public checkRaiting: EventEmitter<number> = new EventEmitter();
  
  public buttonList: RatingButton[] = [];
  public lastChecked: RatingButton = {} as RatingButton;

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
        ariaLabel: ariaLabel,
        btnStyle: 'btn-secondary'
      }
      
      this.buttonList.push(newButton);
    }
  }

  public activeButton(buttonChecked: RatingButton, btnIdx: number) {
    if(buttonChecked !== this.lastChecked) {
      this.lastChecked.selected = false;
      this.lastChecked = buttonChecked;
      buttonChecked.selected = true;
    } else {
      this.lastChecked.selected = false;
      this.lastChecked = {} as RatingButton;
    }

    this.checkRaiting.emit(this.lastChecked.rating);
  }

}
