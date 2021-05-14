import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Subscription } from 'rxjs';
import { AppState } from '../state';
import * as fromChurch from '../state/church';
import * as fromChristian from '../state/christian';
import * as fromTithing from '../state/tithing';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  public title = 'Dashboard';
  public isAdmin = false;

  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];
  public lineChartColors: Color[];
  public lineChartLegend;
  public lineChartType;
  public lineChartPlugins;

  public quantityChurch: number;
  public quantityChristian: number;
  public totalTithings: number;

  public subscription: Subscription = new Subscription();

  constructor(private store$: Store<AppState>) {}

  ngOnInit(): void {
    this.isAdmin = localStorage.getItem('isAdmin') === 'A' ? true : false;

    this.dispatchsIsAdmin();
    this.dispatchIsUser();
    this.subscribeToQuantityChurch();
    this.subscribeToQuantityChristians();
    this.subscribeToTotalTithings();
    this.subscribeToListTithings()
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public subscribeToQuantityChurch() {
    this.subscription.add(
      this.store$
        .pipe(select(fromChurch.selectors.selectQuantity))
        .subscribe((state) => {
          this.quantityChurch = state;
        })
    );
  }

  public subscribeToQuantityChristians() {
    this.subscription.add(
      this.store$
        .pipe(select(fromChristian.selectors.selectQuantityChristians))
        .subscribe((state) => {
          this.quantityChristian = state;
        })
    );
  }

  public subscribeToTotalTithings() {
    this.subscription.add(
      this.store$
        .pipe(select(fromTithing.selectors.selectTotal))
        .subscribe((state) => {
          this.totalTithings = state;
        })
    );
  }

  public subscribeToListTithings() {
    this.subscription.add(
      this.store$
        .pipe(select(fromTithing.selectors.selectTithings))
        .subscribe((state) => {
          console.log(state)
        })
    );
  }

  private dispatchsIsAdmin() {
    if (this.isAdmin) {
      this.store$.dispatch(new fromChurch.actions.GetQuantity());
    }
  }

  private dispatchIsUser() {
    this.store$.dispatch(new fromChristian.actions.GetQuantityChristians());
    this.store$.dispatch(new fromTithing.actions.GetTotal());
    this.store$.dispatch(new fromTithing.actions.ListTithings('2021-05-13', '2021-05-20'));
  }
}
