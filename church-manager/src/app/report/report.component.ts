import { Label, Color } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
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

  public tithes = [];
  public data = [];
  public formFilter: FormGroup;

  public typesFormFilter = [
    {
      label: 'Nome',
      formControlName: 'nameFilter',
      type: 'input',
      placeholder: 'Ex. João',
      lenghtXl: 4,
      lenghtMd: 12,
      lenghtSm: 12,
    },
    {
      label: 'Data',
      formControlName: 'date',
      type: 'input',
      placeholder: 'Ex. 10/10/2010',
      lenghtXl: 4,
      lenghtMd: 12,
      lenghtSm: 12,
    },
    {
      label: 'Bairro',
      formControlName: 'districtFilter',
      type: 'select',
      select: [
        { value: '1', name: 'Alto da Esperança' },
        { value: '2', name: 'Alto Santa Inês' },
        { value: '3', name: 'Centro' },
      ],
      lenghtXl: 4,
      lenghtMd: 12,
      lenghtSm: 12,
    },
  ];
  public buttonsFilter = [
    { function: 'Cancelar', type: 'basic', justify: 'start' },
    { function: 'Aplicar', type: 'primary', justify: 'end' },
  ];

  public titleFilter = 'Filtrar';

  public pageSize = 3;
  public length = 100;
  public pageSizeOptions = [2, 3];

  public churchs = [];
  public isFilter = false;
  public days = [];
  public months = [];
  public years = [];
  constructor() {}

  ngOnInit(): void {
    this.createGraphBar();
    this.createGraphDoughnutPie();
    this.createGraphLine();

    this.formFilter = new FormGroup({
      nameFilter: new FormControl(null),
      data: new FormControl(null),
      districtFilter: new FormControl(null),
    });

    this.data = [
      {
        name: 'João',
        month: '02',
        value: '150',
        date: '10/02/2021',
      },
      {
        name: 'Maria',
        month: '03',
        value: '110',
        date: '80/03/2021',
      },
      {
        name: 'Severino',
        month: '04',
        value: '500',
        date: '30/03/2021',
      },
    ];

    this.churchs = [
      {
        id: '1',
        name: 'Matriz',
      },
      { id: '2', name: 'Santa Inês' },
      {
        id: '3',
        name: 'Santa Ana',
      },
      {
        id: '4',
        name: 'Nossa Senhora do Rosário',
      },
      {
        id: '5',
        name: 'São José',
      },
    ];
    this.days = [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
    ];
    this.months = [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
    ];
    this.years = ['2020', '2021', '2022'];
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
