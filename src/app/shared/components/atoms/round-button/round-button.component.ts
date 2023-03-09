import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() btnStyle!: AppButton;
  @Input() ariaHidden: boolean = false;
  @Input() isChecked: boolean = false;

  @Output() clickInButton: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleActivateState() {
    this.clickInButton?.emit();
  }

}
