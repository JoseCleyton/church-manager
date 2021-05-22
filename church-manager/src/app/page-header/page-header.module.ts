import { MatButtonModule } from '@angular/material/button';
import { PageHeaderComponent } from './page-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DialogAddModule } from '../shared/components/ui/dialog-add/dialog-add.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [PageHeaderComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    DialogAddModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports: [PageHeaderComponent],
})
export class PageHeaderModule {}
