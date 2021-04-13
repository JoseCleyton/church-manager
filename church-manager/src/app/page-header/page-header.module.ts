import { MatButtonModule } from '@angular/material/button';
import { PageHeaderComponent } from './page-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from './dialog/dialog.module';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [PageHeaderComponent],
  imports: [CommonModule, MatDialogModule, DialogModule, MatButtonModule, MatIconModule],
  exports: [PageHeaderComponent],
})
export class PageHeaderModule {}
