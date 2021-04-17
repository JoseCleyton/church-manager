import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogViewComponent } from './dialog-view.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DialogViewComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [DialogViewComponent],
})
export class DialogViewModule {}
