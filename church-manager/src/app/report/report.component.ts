import { Label, Color } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  public lineChartDataBar: ChartDataSets[];
  public lineChartLabelsBar: Label[];
  public lineChartColorsBar: Color[];
  public lineChartLegendBar;
  public lineChartTypeBar;
  public lineChartPluginsBar;

  public lineChartDataDoughnutPie: ChartDataSets[];
  public lineChartLabelsDoughnutPie: Label[];
  public lineChartColorsDoughnutPie: Color[];
  public lineChartLegendDoughnutPie;
  public lineChartTypeDoughnutPie;
  public lineChartPluginsDoughnutPie;

  public lineChartDataLine: ChartDataSets[];
  public lineChartLabelsLine: Label[];
  public lineChartColorsLine: Color[];
  public lineChartLegendLine;
  public lineChartTypeLine;
  public lineChartPluginsLine;

  constructor() { }

  ngOnInit(): void {
    this.createGraphBar();
    this.createGraphDoughnutPie();
    this.createGraphLine();

  }

  private createGraphBar() {
    this.lineChartDataBar = [
      {
        data: [1000, 2000, 900],
        label: 'Dízimos Últimos meses',
      },
    ];
    this.lineChartLabelsBar = ['Janeiro', 'Fevereiro', 'Março'];

    this.lineChartColorsBar = [
      {
        borderColor: 'white',
        backgroundColor: [
          'rgba(53, 121, 255)',
          'rgb(249, 141, 180)',
          'rgb(146, 207, 226',
        ],
      },
    ];

    this.lineChartLegendBar = 'true';

    this.lineChartTypeBar = 'bar';
    this.lineChartPluginsBar = [];
  }
  private createGraphDoughnutPie() {
    this.lineChartDataDoughnutPie = [
      {
        data: [1000, 2000, 900],
        label: 'Dízimos Últimos meses',
      },
    ];
    this.lineChartLabelsDoughnutPie = ['Janeiro', 'Fevereiro', 'Março'];

    this.lineChartColorsDoughnutPie = [
      {
        borderColor: 'white',
        backgroundColor: [
          'rgba(53, 121, 255)',
          'rgb(249, 141, 180)',
          'rgb(146, 207, 226)',
        ],
      },
    ];

    this.lineChartLegendDoughnutPie = 'true';

    this.lineChartTypeDoughnutPie = 'doughnut';
    this.lineChartPluginsDoughnutPie = [];
  }
  private createGraphLine() {
    this.lineChartDataLine = [
      {
        data: [1000, 2000, 900],
        label: 'Dízimos Últimos meses',
      },
    ];
    this.lineChartLabelsLine = ['Janeiro', 'Fevereiro', 'Março'];

    this.lineChartColorsLine = [
      {
        borderColor: 'white',
        backgroundColor: 'rgba(146, 207, 226)',
      },
    ];

    this.lineChartLegendLine = 'true';

    this.lineChartTypeLine = 'line';
    this.lineChartPluginsLine = [];
  }
}
