import { MatButtonModule } from '@angular/material/button';
import { PageHeaderComponent } from './page-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from './dialog/dialog.module';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [PageHeaderComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    DialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [PageHeaderComponent],
})
export class PageHeaderModule {}
