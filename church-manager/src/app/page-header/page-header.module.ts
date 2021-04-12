import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageHeaderComponent } from './page-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { DialogModule } from './dialog/dialog.module';
@NgModule({
  declarations: [PageHeaderComponent],
  imports: [CommonModule, FontAwesomeModule, MatDialogModule, DialogModule, MatButtonModule],
  exports: [PageHeaderComponent],
})
export class PageHeaderModule {}
