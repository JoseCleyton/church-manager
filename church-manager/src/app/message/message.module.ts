import { MatMenuModule } from '@angular/material/menu';
import { PaginatorModule } from './../paginator/paginator.module';
import { PageHeaderModule } from './../page-header/page-header.module';
import { HeaderModule } from './../header/header.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessageComponent } from './message.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { DialogDeleteModule } from '../shared/components/ui/dialog-delete/dialog-delete.module';
import { DialogViewModule } from '../shared/components/ui/dialog-view/dialog-view.module';


@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    MessageRoutingModule,
    FontAwesomeModule,
    HeaderModule,
    PageHeaderModule,
    PaginatorModule,
    MatMenuModule,
    DialogViewModule
  ],
  exports: [MessageComponent]
})
export class MessageModule { }
