import { ChartsModule } from 'ng2-charts';
import { HeaderModule } from './../header/header.module';
import { ReportComponent } from './report.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './report-routing.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { PageHeaderModule } from '../page-header/page-header.module';
import { PaginatorModule } from '../paginator/paginator.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    HeaderModule,
    ChartsModule,
    MatStepperModule,
    MatButtonModule,
    PageHeaderModule,
    PaginatorModule,
    MatSelectModule,
    MatFormFieldModule
  ],
})
export class ReportModule {}
