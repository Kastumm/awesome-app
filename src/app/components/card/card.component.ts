import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  style: string = '';

  @Input() imageLink: any;
  @Input() arrow: any;
  @Input() info: any;
  @Input() description: any;
  @Input() type: string = '';
  @Input() bgcolor: any;

  ngOnInit(): void {
    this.getClass(this.type);
  }

  getClass(type: string): string {
    switch (type) {
      case 'static':
        return (this.style = 'static-card');
      case 'meeting':
        return (this.style = 'meeting-card');
      case 'metric':
        return (this.style = 'metric-card');
      default:
        return '';
    }
  }
}
