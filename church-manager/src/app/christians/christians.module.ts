import { DialogDeleteModule } from '../shared/components/ui/dialog-delete/dialog-delete.module';
import { DialogEditModule } from '../shared/components/ui/dialog-edit/dialog-edit.module';
import { DialogModule } from './../page-header/dialog/dialog.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { PaginatorModule } from './../paginator/paginator.module';
import { PageHeaderModule } from './../page-header/page-header.module';
import { HeaderModule } from './../header/header.module';
import { ChristiansComponent } from './christians.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChristiansRoutingModule } from './christians-routing.module';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [ChristiansComponent],
  imports: [
    CommonModule,
    ChristiansRoutingModule,
    PaginatorModule,
    HeaderModule,
    PageHeaderModule,
    MatMenuModule,
    MatDialogModule,
    DialogModule,
    DialogEditModule,
    DialogDeleteModule,
    MatIconModule
  ],
  exports: [ChristiansComponent],
})
export class ChristiansModule {}
