import { Component, Input, OnInit } from '@angular/core';
import { ButtonType } from '../../../models/buttons-type.model';

@Component({
  selector: 'app-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.scss']
})
export class RoundButtonComponent implements OnInit {

  @Input() ariaLabel!: string;
  @Input() iconLink!: string;
  @Input() text!: string;
  @Input() bgColor!: ButtonType;

  constructor() { }

  ngOnInit(): void {
  }

}
