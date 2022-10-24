import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  public chart?: Chart<'line', string[], string>;

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }
  createChart(): void {
    this.chart = new Chart('MyChart', {
      type: 'line',

      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [
          {
            backgroundColor: '#bed0ff',
            borderColor: '#2962ff',
            borderWidth: 6,
            tension: 0.3,
            fill: true,
            data: ['2.5', '1.4', '6', '4'],
          },
        ],
      },
      options: {
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
}
