import { Component, Input, OnInit } from '@angular/core';
import { AppButton } from '../../../models/buttons.model';

@Component({
  selector: 'app-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.scss']
})
export class RoundButtonComponent implements OnInit {

  @Input() ariaLabel!: string;
  @Input() iconLink!: string;
  @Input() text!: string | number;
  @Input() bgColor!: AppButton;
  @Input() ariaHidden: boolean = false;
  @Input() isChecked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleActivateState(button: HTMLButtonElement) {
    button.classList.toggle('active');
  }

}
