import { Component } from '@angular/core';
// import CanvasJS from '@canvasjs/charts';

// import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

import * as Utils from '../../Utils'


import { Chart, ChartConfiguration } from 'chart.js/auto';

@Component({
  selector: 'app-time-chart',
  templateUrl: './time-chart.component.html',
  styleUrls: ['./time-chart.component.css'],
  standalone: false
})
export class TimeChartComponent {


  public chart: any;


  createChart() {


    let config: ChartConfiguration = {
      type: 'line', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: this.generateLabels(),
        datasets: [
          {
            label: 'Dataset',
            data: this.generateData(),
            borderColor: Utils.CHART_COLORS.red,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red),
            fill: 'start'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          filler: {
            propagate: false,
          },
          title: {
            display: true,
            text: 'adasasdads'
          }
        },
        interaction: {
          intersect: false,
        }
      },

    }

    this.chart = new Chart("MyChart", config);
  }


  ngOnInit(): void {
    this.createChart();
  }


  inputs = {
    min: -100,
    max: 100,
    count: 8,
    decimals: 2,
    continuity: 1
  };

  generateLabels = () => {
    return Utils.months({ count: this.inputs.count });
  };

  generateData = () => (Utils.numbers(this.inputs));
}

