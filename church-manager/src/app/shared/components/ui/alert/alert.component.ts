import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/state';
import * as fromAlert from '../../../../state/alert';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, OnDestroy {
  public alertsSuccess = [];
  public alertsErrs = [];
  public alertsWarning = [];
  public subscription: Subscription = new Subscription();

  constructor(private store$: Store<AppState>) {}

  ngOnInit(): void {
    this.subscribeToAlertsSuccess();
    this.subscribeToAlertsErrs();
    this.subscribeToAlertsWarning();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public subscribeToAlertsSuccess() {
    this.subscription.add(
      this.store$
        .pipe(select(fromAlert.selectors.selectAlertsSuccess))
        .subscribe((state) => {
          this.alertsSuccess = state;
        })
    );
  }

  public subscribeToAlertsErrs() {
    this.subscription.add(
      this.store$
        .pipe(select(fromAlert.selectors.selectAlertsErrs))
        .subscribe((state) => {
          this.alertsErrs = state;
        })
    );
  }
  public subscribeToAlertsWarning() {
    this.subscription.add(
      this.store$
        .pipe(select(fromAlert.selectors.selectAlertsWarning))
        .subscribe((state) => {
          this.alertsWarning = state;
        })
    );
  }
  public closeAlertError() {
    this.store$.dispatch(new fromAlert.actions.ResetAlert());
  }
}
