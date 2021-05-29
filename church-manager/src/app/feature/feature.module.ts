import { MenuComponent } from './../menu/menu.component';
import { FeatureComponent } from './feature.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { LogoutModule } from '../shared/components/ui/logout/logout.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [FeatureComponent, MenuComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MatToolbarModule,
    MatDialogModule,
    LogoutModule,
    MatIconModule,
    MatMenuModule
  ],
})
export class FeatureModule {}
