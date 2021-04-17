import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogAddComponent } from './dialog-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [DialogAddComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [DialogAddComponent],
})
export class DialogAddModule {}
