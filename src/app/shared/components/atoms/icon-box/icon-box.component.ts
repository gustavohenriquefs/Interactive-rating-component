import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-box',
  templateUrl: './icon-box.component.html',
  styleUrls: ['./icon-box.component.scss']
})
export class IconBoxComponent implements OnInit {

  @Input() iconLink!: string;
  @Input() ariaLabel!: string;
  @Input() iconStyle!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
