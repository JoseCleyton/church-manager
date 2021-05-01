import { MenuComponent } from './../menu/menu.component';
import { FeatureComponent } from './feature.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { LogoutModule } from '../shared/components/ui/logout/logout.module';
@NgModule({
  declarations: [FeatureComponent, MenuComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MatToolbarModule,
    MatDialogModule,
    LogoutModule,
  ],
})
export class FeatureModule {}
