import { FeatureComponent } from './feature.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'church',
        loadChildren: () =>
          import('../church/church.module').then((m) => m.ChurchModule),
      },
      {
        path: 'christians',
        loadChildren: () =>
          import('../christians/christians.module').then((m) => m.ChristiansModule),
      },
      {
        path: 'report',
        loadChildren: () =>
          import('../report/report.module').then((m) => m.ReportModule),
      },
      {
        path: 'message',
        loadChildren: () =>
          import('../message/message.module').then((m) => m.MessageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule { }
