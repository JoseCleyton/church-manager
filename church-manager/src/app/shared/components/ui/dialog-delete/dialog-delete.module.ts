import { MatButtonModule } from '@angular/material/button';
import { DialogDeleteComponent } from './dialog-delete.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DialogDeleteComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [DialogDeleteComponent],
})
export class DialogDeleteModule {}
