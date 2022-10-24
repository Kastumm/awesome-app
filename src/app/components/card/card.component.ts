import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor() {}
  @Input() imageLink: any;
  @Input() arrow: any;
  @Input() info: any;
  @Input() description: any;
  @Input() type: any;
  @Input() bgcolor: any;
}
