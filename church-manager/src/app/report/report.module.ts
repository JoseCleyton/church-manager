import { ChartsModule } from 'ng2-charts';
import { HeaderModule } from './../header/header.module';
import { ReportComponent } from './report.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    FontAwesomeModule,
    HeaderModule,
    ChartsModule
  ]
})
export class ReportModule { }
