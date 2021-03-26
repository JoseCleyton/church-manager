import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageHeaderComponent } from './page-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PageHeaderComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [PageHeaderComponent]
})
export class PageHeaderModule { }
