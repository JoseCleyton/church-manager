import { ChartsModule } from 'ng2-charts';
import { HeaderModule } from './../header/header.module';
import { ReportComponent } from './report.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';


@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    HeaderModule,
    ChartsModule
  ]
})
export class ReportModule { }
