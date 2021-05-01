import { PaginatorModule } from './../paginator/paginator.module';
import { PageHeaderModule } from './../page-header/page-header.module';
import { HeaderModule } from './../header/header.module';
import { MatCardModule } from '@angular/material/card';
import { ChurchComponent } from './church.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChurchRoutingModule } from './church-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { DialogViewModule } from '../shared/components/ui/dialog-view/dialog-view.module';

@NgModule({
  declarations: [ChurchComponent],
  imports: [
    CommonModule,
    ChurchRoutingModule,
    MatCardModule,
    HeaderModule,
    PageHeaderModule,
    PaginatorModule,
    MatMenuModule,
    MatIconModule,
    DialogViewModule
  ]
})
export class ChurchModule { }
