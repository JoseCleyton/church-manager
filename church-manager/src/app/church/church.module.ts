import { PaginatorModule } from './../paginator/paginator.module';
import { PageHeaderModule } from './../page-header/page-header.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule } from './../header/header.module';
import { MatCardModule } from '@angular/material/card';
import { ChurchComponent } from './church.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChurchRoutingModule } from './church-routing.module';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [ChurchComponent],
  imports: [
    CommonModule,
    ChurchRoutingModule,
    MatCardModule,
    HeaderModule,
    FontAwesomeModule,
    PageHeaderModule,
    PaginatorModule,
    MatMenuModule
  ]
})
export class ChurchModule { }
