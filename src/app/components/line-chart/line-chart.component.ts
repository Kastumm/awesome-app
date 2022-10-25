import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
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
            data: ['2.5', '1.4', '6', '4', '7'],
          },
        ],
      },
      options: {
        hover: {
          intersect: false,
        },
        elements: {
          point: {
            hoverBackgroundColor: '#2962ff',
            radius: 0,
            hoverRadius: 8,
            borderWidth: 4,
          },
        },
        aspectRatio: 2,
        responsive: true,
        scales: {
          x: {
            display: true,
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
