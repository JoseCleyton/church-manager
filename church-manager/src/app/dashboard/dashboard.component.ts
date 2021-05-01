import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public title = 'Dashboard';
  public isAdmin = false;

  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];
  public lineChartColors: Color[];
  public lineChartLegend;
  public lineChartType;
  public lineChartPlugins;

  constructor() {}

  ngOnInit(): void {
    this.isAdmin = localStorage.getItem('isAdmin') === 'A' ? true : false;
    this.lineChartData = [
      {
        data: [1000, 2000, 900],
        label: 'Dízimos Últimos meses',
      },
    ];
    this.lineChartLabels = ['Janeiro', 'Fevereiro', 'Março'];

    this.lineChartColors = [
      {
        borderColor: 'white',
        backgroundColor: [
          'rgba(53, 121, 255)',
          'rgb(249, 141, 180)',
          'rgb(146, 207, 226',
        ],
      },
    ];

    this.lineChartLegend = 'true';

    this.lineChartType = 'bar';
    this.lineChartPlugins = [];
  }
}
